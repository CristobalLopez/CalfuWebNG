import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalfuApiService } from '../../servicios/calfu-api.service';
// import { ObraMstrModel } from '../../models/obraMstr.model';
// import { ArtworksService, Artwork } from '../../servicios/artworks.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html'
})
export class ArtworksComponent implements OnInit {

  
  artworks: any = [];

  constructor(  private _calfService: CalfuApiService, private _router: Router) { }

  ngOnInit() {

    this.selectObras()
    .subscribe((data: any)=> {
      console.log(data);
      this.artworks=data;
    });

    this._calfService.topFiveObras().
    subscribe( resp=>{
      console.log(resp);
    });
  }

  verArtwork( idx: number ){
    this._router.navigate( ['/artwork', idx]);
    

  }

  selectObras(){
    return this._calfService.traeObras();
  }

}
