import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL: string = "http://localhost:8090/educacion/"
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<educacion> {

    return this.http.get<educacion>(this.URL + "traer");

  }

  registrarEducacion(educacion: educacion): Observable<Object> {

    return this.http.post<educacion>(this.URL + "crear", educacion);

  }


  //este metodo sirve para actualizar el empleado
  actualizarEducacion(id: number, educacion: educacion): Observable<Object> {
    return this.http.put(`${this.URL}${id}`, educacion);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEducacionPorId(id: number): Observable<educacion> {
    return this.http.get<educacion>(`${this.URL}actualizar/${id}`);
  }

  eliminarEducacion(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}borrar/${id}`);
  }
}
