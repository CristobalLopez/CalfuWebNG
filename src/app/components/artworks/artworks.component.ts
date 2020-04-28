import { Component, OnInit } from '@angular/core';
import { ArtworksService, Artwork } from '../../servicios/artworks.service';
import { Router } from '@angular/router';
import { CalfuApiService } from '../../servicios/calfu-api.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html'
})
export class ArtworksComponent implements OnInit {

  artworks: Artwork[] = [];

  constructor( private _artworksService: ArtworksService, private _calfService: CalfuApiService,
               private _router: Router) { }

  ngOnInit() {

    this.artworks = this._artworksService.getArtworks();
    this._calfService.traeObras().
    subscribe( resp=>{
      console.log(resp);
    });

    this._calfService.topFiveObras().
    subscribe( resp=>{
      console.log(resp);
    });
  }

  verArtwork( idx: number ){
    this._router.navigate( ['/artwork', idx]);

  }

}
