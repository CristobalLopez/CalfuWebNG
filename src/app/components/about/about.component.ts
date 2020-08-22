import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  auth = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('auth')==='OK') {
      this.auth=true;
    }else{
      this.auth=false;
    }
  }

}
