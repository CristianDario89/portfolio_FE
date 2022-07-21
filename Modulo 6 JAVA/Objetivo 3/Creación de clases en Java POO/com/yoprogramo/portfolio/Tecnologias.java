package com.yoprogramo.portfolio;
 
public class Tecnologias {
    String nombre;
    Boolean tipo;

    public Tecnologias(String nombre, Boolean tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getTipo() {
        return tipo;
    }

    public void setTipo(Boolean tipo) {
        this.tipo = tipo;
    }
  
    
}
