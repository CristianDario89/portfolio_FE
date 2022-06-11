import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any = new educacion("","","","","");

  constructor(public educacionService: EducacionService,
              public router: Router) { }

  ngOnInit(): void {
    this.obtenerEducacion();
  }

  obtenerEducacion() {
    this.educacionService.obtenerDatos().subscribe(data => {//metodo q escuche siempre  q el observable haga un cambio
      this.educacionList = data;
    });
  }
  actualizarEducacion(id: number) {
    this.router.navigate(['update-educacion', id]);
  }

  eliminarEducacion(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe(dato => {
     
      this.volverAlPortfolio();
    });
  }
  volverAlPortfolio() {
    this.router.navigate(['portfolio']);
  }
  redirect() {
    this.router.navigate(['crear-educacion']); /*, {skipLocationChange :true}*/
  }

}
/*
  educacionList:any;
  constructor(private datosPortfolio: PortfolioService) { }
   
  ngOnInit(): void {
     this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educacion;
    });*/