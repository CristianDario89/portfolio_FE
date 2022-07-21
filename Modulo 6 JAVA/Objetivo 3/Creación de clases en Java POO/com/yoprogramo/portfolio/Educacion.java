/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yoprogramo.portfolio;

/**
 *
 * @author Usuario
 */
public class Educacion extends Seccion{
   int duracion;

    public Educacion(int duracion, String dato1, String dato2) {
        super(dato1, dato2);
        this.duracion = duracion;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public String getDato1() {
        return dato1;
    }

    public void setDato1(String dato1) {
        this.dato1 = dato1;
    }

    public String getDato2() {
        return dato2;
    }

    public void setDato2(String dato2) {
        this.dato2 = dato2;
    }

    @Override
    public void deleteOne() {
        super.deleteOne();  
    }
 
    public void updateOne(String dato1, String dato2, int duracion) {
         
    }
 
    public void addNew(String dato1, String dato2, int duracion) {
      
    }
   
   
    
}
