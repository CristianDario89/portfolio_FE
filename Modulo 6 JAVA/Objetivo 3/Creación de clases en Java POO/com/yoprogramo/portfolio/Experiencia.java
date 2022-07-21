package com.yoprogramo.portfolio;
 
public class Experiencia extends Seccion{
int duracion;  
String descripcion;

    public Experiencia(int duracion, String descripcion, String dato1, String dato2) {
        super(dato1, dato2);
        this.duracion = duracion;
        this.descripcion = descripcion;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
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
 
    public void updateOne(String dato1, String dato2, int duracion, String descripcion) {
        
    }
 
    public void addNew(String dato1, String dato2, int duracion, String descripcion) {
       
    }


    
}
