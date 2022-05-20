import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList: any = new proyecto("","","","","");
  constructor(private ProyectoService: ProyectoService) { }
  ngOnInit(): void {

    this.ProyectoService.obtenerDatos().subscribe(data =>{
      console.log("Proyectos experiencia: "+ JSON.stringify(data));
      this.proyectoList = data; 
    });

  }

}
