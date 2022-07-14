import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("", "");
  miPortfolio: any;

  constructor(public personaService: PersonaService,
    private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.personaService.obtenerDatos().subscribe(data => {//metodo q escuche siempre  q el observable haga un cambio
   //   console.log("Datos personales" + JSON.stringify(data));
      this.persona = data;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    });
  }

}
