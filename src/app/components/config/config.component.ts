import { Component, OnInit } from '@angular/core';
import { CalfuApiService } from '../../servicios/calfu-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: []
})
export class ConfigComponent implements OnInit {

  constructor(private _calfuService: CalfuApiService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('auth')!=='OK') {
     this._router.navigateByUrl('/home');
    }
  }

}
