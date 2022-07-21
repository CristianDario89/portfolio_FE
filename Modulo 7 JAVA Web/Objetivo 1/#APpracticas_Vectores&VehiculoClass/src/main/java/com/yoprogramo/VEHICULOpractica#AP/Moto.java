/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yoprogramo.primerproyecto;

/**
 *
 * @author Usuario
 */
public class Moto extends Vehiculo{
    int cilindrada;

    public Moto(int cilindrada) {
        this.cilindrada = cilindrada;
    }

    public Moto(int cilindrada, int num_registro, int cant_ruedas, String marca, String modelo) {
        super(num_registro, cant_ruedas, marca, modelo);
        this.cilindrada = cilindrada;
    }

    public int getCilindrada() {
        return cilindrada;
    }

    public void setCilindrada(int cilindrada) {
        this.cilindrada = cilindrada;
    }    
    
}
