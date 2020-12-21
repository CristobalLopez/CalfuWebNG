import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComentarioModel } from '../models/comentario.model';
import { MainConfigModel } from '../models/mainConfig.model';
import { MeGustaModel } from '../models/meGusta.model';
import { ObraMstrModel } from '../models/obraMstr.model';
import { TipoObraModel } from '../models/tipoObra.model';
import { UserMstrModel } from '../models/userMstr.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CalfuApiService {
  private url ='/api/';
  private headers: Headers;
  isLoggedIn: boolean =false;

  constructor(private http: HttpClient) { 
    
  }
//#region Funciones relacionadas a las obras

getObra( idx: string ){
  return this.http.get(`${this.url}GetObra?id=${idx}`);
}

traeObras(){
  return this.http.get(`${this.url}SelectTodasObras`);      
}

topFiveObras(){
  
  return this.http.get(`${this.url}TopFiveObras`); 
}

RemoverObra(id : string){  
  
  console.log(this.http.get(`${this.url}RemoveObra?id=${id}`));
    return this.http.get(`${this.url}RemoveObra?id=${id}`); 
  
  
}
//#endregion

//#region Funciones relacionadas a Usuarios 
login(name: string, pass: string){
  return this.http.get(`${this.url}Login?nick=${name}&pass=${pass}`);
}  

logout(){
  localStorage.removeItem('auth');
}

CrearUser(nUser: UserMstrModel){
  return this.http.post(`${this.url}AddUser?userDto=${nUser}`, null);
}
//#endregion

  
  
}
