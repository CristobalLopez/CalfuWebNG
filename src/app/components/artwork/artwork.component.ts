import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworksService } from '../../servicios/artworks.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html'
})
export class ArtworkComponent  {

  
  artwork: any = {};
  constructor( private _activatedRoute: ActivatedRoute,
                private _artworksService: ArtworksService) {

    this._activatedRoute.params.subscribe(params => {
            
      this.artwork = this._artworksService.getArtwork(params[ 'id' ]);

    });

   }



}