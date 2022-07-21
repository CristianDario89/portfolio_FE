package vectores;

import java.util.ArrayList;
import java.util.List;

/*import java.util.Scanner;*/
 
public class mainVector {
 
    public static void main(String[] args) {
        
       List <Mascotas> listaMascotas = new ArrayList<Mascotas>();
       listaMascotas.add(new Mascotas("Pepe","perro","Macho",true,"caniche"));
       listaMascotas.add(new Mascotas("Pepa","perra","Hembra",true,"caniche"));
       listaMascotas.add(new Mascotas("Grecia","perra","Hembra",true,"Bulldog"));
       listaMascotas.add(new Mascotas("Ilinois","gato","Macho",true,"siames"));
       listaMascotas.add(new Mascotas("Riojano","leon","Macho",false,"Sabana"));
        
       for(Mascotas mascota : listaMascotas ){
           System.out.println("Nombre: " + mascota.getNombre());
           System.out.println("Especie: " + mascota.getEspecie());
           System.out.println("Tiene pelaje?: " + mascota.isPelaje());
           System.out.println("////////////////");
       }
       
        listaMascotas.get(0).setNombre("Nuevo nombre");
        listaMascotas.get(4).setNombre("Simba");
        
        for(Mascotas mascota : listaMascotas ){
           System.out.println("Nombre: " + mascota.getNombre());
           System.out.println("Especie: " + mascota.getEspecie());
           System.out.println("Tiene pelaje?: " + mascota.isPelaje());
           System.out.println("*******************");
       }
        
       listaMascotas.add(new Mascotas("Modric","perro","Macho",true,"Madrid"));
       listaMascotas.add(new Mascotas("Roman","Foca","Macho",false,"La boca")); 
             
      for(Mascotas mascota : listaMascotas ){
           if(mascota.getEspecie() == "perro"){
                 System.out.println("Nombre: " + mascota.getNombre());
                System.out.println("Especie: " + mascota.getEspecie());
                System.out.println("Tiene pelaje?: " + mascota.isPelaje());
                System.out.println("---------------");
          
                }
          
       }
    
   
/* 1)Se necesita de un vector que sea capaz de almacenar 10 números enteros entre 1 y 100.
Realizar un programa que permita la carga por teclado de los 10 números solicitados.*/
  /*       int vector [] = new int[10];
         Scanner teclado = new Scanner(System.in);
        
         for(int i=0;i<vector.length;i++){
                System.out.println("ingrese el valor para el indice " + i);
                
                while( vector[i] < 1 ||  vector[i] > 100){
                   vector[i] = teclado.nextInt();   
                }       
        }
     
        for(int i=0;i<vector.length;i++){
             System.out.println("Estoy en el indice" + i);
             System.out.println("tengo guardado un " + vector[i]);
             System.out.println("-----------------------");
        }
        
        /*
        int vector [] = new int [4];
        
        Scanner teclado = new Scanner(System.in);
        for(int i=0;i<vector.length;i++){
             System.out.println("ingrese el valor para el indice " + i);
             vector[i] = teclado.nextInt();
        }
        
        
        for(int i=0;i<vector.length;i++){
             System.out.println("Estoy en el indice" + i);
             System.out.println("tengo guardado un " + vector[i]);
             System.out.println("-----------------------");
        }
        
        */
        }
   
}
 