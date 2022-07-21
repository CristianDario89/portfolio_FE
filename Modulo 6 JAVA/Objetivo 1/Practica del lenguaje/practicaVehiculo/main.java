package com.yoprogramo.primerproyecto;
 
public class main {

    public static void main(String[] args) {
        Vehiculo vehi = new Vehiculo(87876,4," Renault","indefinido");
        Auto auto = new Auto(1,"AAEWEQ",5,"rojo",true,6555,4," Ford","Chevy");
        Moto moto = new Moto(150,32322,2," Motomel","CG150");
        Moto camion = new Moto(6,67452,6," Mercedes","Scania");
        
         Vehiculo vector[] = new Vehiculo[4];
         vector[0] = vehi;
         vector[1] = auto;
         vector[2] = moto;
         vector[3] = camion;
         
         for(int i=0;i<4;i++){
           System.out.println("Registro Nro: "+ i + vector[i].getMarca());  
         }
         
        /*
         System.out.println(auto2.toString());
       
        auto2.encender();
        auto2.acelerar(60);
        
        System.out.println("ID es " + auto2.getId());
         System.out.println("Color es " + auto2.getColor());
         
         auto2.setColor("Blanco");
         System.out.println("Color nuevo es " + auto2.getColor());
         
         auto1.setColor("Violeta");
          System.out.println("Color Auto 1 es " + auto1.getColor());*/
    }
    
}
