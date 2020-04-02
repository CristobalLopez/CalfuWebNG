import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserMstrModel } from '../../models/userMstr.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userMstr : UserMstrModel = new UserMstrModel();
  recordarme= false;

  constructor(private router: Router) { }

  ngOnInit() {
   
    
  }

  login(form: NgForm){
    return true;

  }

  

}
