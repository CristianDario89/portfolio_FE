package com.yoprogramo.portfolio;
 
public class Persona{
  String nombre;
  String profesion;
  Domicilio domicilio;

    public Persona(String nombre, String profesion, Domicilio domicilio) {
        this.nombre = nombre;
        this.profesion = profesion;
        this.domicilio = domicilio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public Domicilio getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(Domicilio domicilio) {
        this.domicilio = domicilio;
    }
  
  
}
