import { Component, OnInit } from '@angular/core';

import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 experienciaList: any = new experiencia("","","","","");
  constructor(private expService: ExperienciaService) { }
  
    ngOnInit(): void {
      this.expService.obtenerDatos().subscribe(data =>{
        console.log("Datos experiencia: "+ JSON.stringify(data));
        this.experienciaList = data; 
      });
  }

}
