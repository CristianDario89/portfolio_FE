import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any = new educacion("","","","","");

  constructor(public educacionService: EducacionService ) { }

  
  ngOnInit(): void {
    this.educacionService.obtenerDatos().subscribe(data=>{//metodo q escuche siempre  q el observable haga un cambio
      console.log("Datos educacion: "+ JSON.stringify(data));
      this.educacionList = data; 
    });
  /*
  educacionList:any;
  constructor(private datosPortfolio: PortfolioService) { }
   
  ngOnInit(): void {
     this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educacion;
    });*/
  }

}
