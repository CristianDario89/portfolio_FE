import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL: string = "http://localhost:8090/proyecto/"
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<proyecto> {

    return this.http.get<proyecto>(this.URL + "traer");

  }

  registrarProyecto(proyecto: proyecto): Observable<Object> {

    return this.http.post<proyecto>(this.URL + "crear", proyecto);

  }

  
  eliminarProyecto(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}borrar/${id}`);
  }

}
