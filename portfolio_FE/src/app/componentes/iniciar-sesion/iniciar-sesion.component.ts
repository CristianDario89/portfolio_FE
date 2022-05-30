import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';


import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  /* form:FormGroup;*/
  user: any = new User("", "");

  constructor(private loginService: LoginService,
    private ruta: Router) {
    /*this.form=this.FormBuilder.group(
    {
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    deviceInfo:this.FormBuilder.group({
    deviceId: ["21212121212"],
    deviceType: ["DEVICE_TYPE_ANDROID"],
    notificationToken: ["4545454545"],
    })  
    }
    )*/
  }

  ngOnInit(): void {
  }
  userLogin() {
    console.log(this.user);

    this.loginService.loginUser(this.user).subscribe(data => {
      alert("Login existoso bro");
      this.ruta.navigate(['/portfolio']);
    }, error => alert("Ingrese datos correctos please"))
  }
  /*
   get Email(){
     return this.form.get('email');
   }
 
   get Password(){
     return this.form.get('password');
   }
  
   onEnviar(event:Event){
     event.preventDefault;
     this.AutenticacionService.IniciarSesion(this.form.value).subscribe(data =>{
       console.log("DATA:", JSON.stringify(data));
       this.ruta.navigate(['/portfolio'])
     })
   } */

}
