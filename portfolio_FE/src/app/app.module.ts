import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { skillsComponent } from './componentes/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    skillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
