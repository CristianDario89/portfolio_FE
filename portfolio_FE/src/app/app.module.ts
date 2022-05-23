import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { skillsComponent } from './componentes/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    skillsComponent,
    ProyectoComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
