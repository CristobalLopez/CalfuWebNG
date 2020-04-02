import { Component, OnInit } from '@angular/core';
import { ArtworksService, Artwork } from '../../servicios/artworks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html'
})
export class ArtworksComponent implements OnInit {

  artworks: Artwork[] = [];

  constructor( private _artworksService: ArtworksService,
               private _router: Router) { }

  ngOnInit() {

    this.artworks = this._artworksService.getArtworks();
  }

  verArtwork( idx: number ){
    this._router.navigate( ['/artwork', idx]);

  }

}
