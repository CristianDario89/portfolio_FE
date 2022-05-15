import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL:string="http://localhost:8090/educacion/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<educacion>{

    return this.http.get<educacion>(this.URL+"traer");
   
  }  
}
