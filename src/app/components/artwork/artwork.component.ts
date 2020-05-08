import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalfuApiService } from '../../servicios/calfu-api.service';
// import { ArtworksService } from '../../servicios/artworks.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html'
})
export class ArtworkComponent  {

  
  artwork: any = {};
  constructor( private _calfService: CalfuApiService, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => {            
      // this.artwork = this._artworksService.getArtwork(params[ 'id' ]);
      this._calfService.getObra(params.id)
      .subscribe(obra=> {
        console.log(obra);
        this.artwork = obra;

      });
    });

   }



}