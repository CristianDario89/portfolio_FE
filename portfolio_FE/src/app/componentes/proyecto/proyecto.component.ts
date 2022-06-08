import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList: any = new proyecto("", "", "", "", "");
  constructor(private ProyectoService: ProyectoService,
    public router: Router) { }
  ngOnInit(): void {

    this.ProyectoService.obtenerDatos().subscribe(data => {
      console.log("Proyectos experiencia: " + JSON.stringify(data));
      this.proyectoList = data;
    });

  }

  
  redirect() {
    this.router.navigate(['crear-proyecto']); /*, {skipLocationChange :true}*/
  }

  
  eliminarPro(id: number) {
    this.ProyectoService.eliminarProyecto(id).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['portfolio']);
    });
  }

}
