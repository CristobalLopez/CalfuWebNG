import { Component, OnInit } from '@angular/core';
import { CalfuApiService } from '../../../servicios/calfu-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent implements OnInit {
  auth = false;

  constructor(private _calfService: CalfuApiService, private router: Router) { }

  ngOnInit() {
    
    if (localStorage.getItem('auth')==='OK') {
      this.auth=true;
    }else{
      this.auth=false;
    }
  }

  logOut(){
    this._calfService.logout();
    this.router.navigateByUrl('/home');
  }

}
