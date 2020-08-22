import { Component, OnInit } from '@angular/core';
import { CalfuApiService } from '../../servicios/calfu-api.service';
import { Router } from '@angular/router';
import { UserMstrModel } from '../../models/userMstr.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: []
})
export class ConfigComponent implements OnInit {
  nUser = false;
  artworks: any = [];
  mensaje : string;
  constructor(private _calfuService: CalfuApiService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('auth')!=='OK') {
     this._router.navigateByUrl('/home');
    }else{
      this.selectObras()
    .subscribe((data: any)=> {
      console.log(data);
      this.artworks=data;
    });
    }
  }

  selectObras(){
    return this._calfuService.traeObras();
  }

  newUser : UserMstrModel;
  ShowNewUser(){
    this.nUser = true;
  }

  CrearUser(form: NgForm){
    
    const userName = form.control.get('name').value;
    const password1= form.control.get('password').value;
    const password2= form.control.get('confirmPass').value;
    
    if(password1=== password2 || userName ==='' || password1 ==='' || password2 ===''){
      false;
    } else{

      this.newUser.userName= userName;
      this.newUser.userPass= password1;      
      this._calfuService.CrearUser(this.newUser)
      .subscribe((data: any)=> {
        console.log(data);
        this.mensaje=data;
      });
      if (this.mensaje === 'Exito') {
        this.nUser = false;
      }
    }
  }

}
