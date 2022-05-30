import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL: string = "http://localhost:8090/experiencia/"
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<experiencia> {

    return this.http.get<experiencia>(this.URL + "traer");

  }

  registrarExperiencia(experiencia: experiencia): Observable<Object> {

    return this.http.post<experiencia>(this.URL + "crear", experiencia);

  }

  eliminarExperiencia(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}borrar/${id}`);
  }

}
