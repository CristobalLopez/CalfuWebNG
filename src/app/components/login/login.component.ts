import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserMstrModel } from '../../models/userMstr.model';
import { CalfuApiService } from '../../servicios/calfu-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userMstr : UserMstrModel = new UserMstrModel();
  recordarme= false;
  auth: boolean = false;

  constructor(private _calfService: CalfuApiService,private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('name')) {
      this.userMstr.userName= localStorage.getItem('name');
      this.recordarme= true;  
    }    
  }

  login(form: NgForm){
    if (form.invalid) {return;}

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    return this._calfService.login( this.userMstr.userName, this.userMstr.userPass)
    .subscribe(
      resp=>{
        console.log(resp);
        if (resp) {
          this.auth = true;
          localStorage.setItem('auth', 'OK');
        }
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('name', this.userMstr.userName);
        }
        this.router.navigateByUrl('/home');
      },
      (err)=>{
        console.log(err);
        Swal.fire({          
          icon: 'error',
          text: err.error.error.message
        });

      }
    );
    
  }

  

}
