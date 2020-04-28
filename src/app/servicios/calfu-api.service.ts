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

  constructor(private http: HttpClient) { 
    
  }

  traeObras(){
    return this.http.get(`${this.url}SelectTodasObras`);      
  }

  topFiveObras(){
    
    return this.http.get(`${this.url}TopFiveObras`); 
  }

  login(name: string, pass: string){
    return this.http.get(`${this.url}Login?name=${name}&pass=${pass}`);
  }
  
}
