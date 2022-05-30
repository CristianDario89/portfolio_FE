import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any = new experiencia("", "", "", "", "");
  constructor(private expService: ExperienciaService,
    public router: Router) { }

  ngOnInit(): void {
    this.expService.obtenerDatos().subscribe(data => {
      console.log("Datos experiencia: " + JSON.stringify(data));
      this.experienciaList = data;
    });
  }

  redirect() {
    this.router.navigate(['crear-experiencia']); /*, {skipLocationChange :true}*/
  }

  
  eliminarExp(id: number) {
    this.expService.eliminarExperiencia(id).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['http://localhost:4200/portfolio']);
    });
  }
}
