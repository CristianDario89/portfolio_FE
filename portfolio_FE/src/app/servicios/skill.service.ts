import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class skillservice {
  URL:string="http://localhost:8090/skill/"
  constructor(private http:HttpClient) { }
  

  obtenerDatos():Observable<Skill>{

    return this.http.get<Skill>(this.URL+"traer");
   
  }  

  
  registrarSkill(Skill:Skill):Observable<Object>{

    return this.http.post<Skill>(this.URL+"crear", Skill);
   
  }  
}
