import { Component, OnInit } from '@angular/core';
import { CalfuApiService } from '../../../servicios/calfu-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent implements OnInit {
  auth = false;

  constructor(private _calfService: CalfuApiService) { }

  ngOnInit() {
    if (localStorage.getItem('auth')==='OK') {
      this.auth=true;
    }
  }

}
