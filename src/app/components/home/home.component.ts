import { Component, OnInit } from '@angular/core';
import { CalfuApiService } from '../../servicios/calfu-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  TopFives : any = [];
  constructor(private _calfService: CalfuApiService, private _router: Router) { }

  ngOnInit() {
    this.selectTopFive()
    .subscribe((data: any)=> {
      console.log(data);
      this.TopFives=data;
    });
  }

  selectTopFive(){
    return this._calfService.topFiveObras();

  }
}
