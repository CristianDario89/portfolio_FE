import { Component, OnInit } from '@angular/core';
 
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoList: any = new proyecto("","");
  constructor(private proyService: ProyectoService) { }

  ngOnInit(): void {
    this.proyService.obtenerDatos().subscribe(data =>{
      console.log("Datos proyecto: "+ JSON.stringify(data));
      this.proyectoList = data; 
    });
  }

}
