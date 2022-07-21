package logica;
 
import java.util.List;
import persistencia.ControladoraPersistencia;

public class Controladora {
       ControladoraPersistencia controlPersis = new ControladoraPersistencia();
    
    public void crearPersona(Seccion secc){
        controlPersis.crearPersona(secc);
    }
    
      public void eliminarPersona(int id){
        controlPersis.eliminarPersona(id);
    }
      
      public void eliminarPersona(Seccion secc){
        controlPersis.eliminarPersona(secc);
    }
      
      public List<Seccion> traerPersonas(){
        return controlPersis.traerPersonas();
    }  
      
      /*--------------*/
      
    public void crearPersona2(Experiencia secc){
        controlPersis.crearPersona2(secc);
    }
    
      public void eliminarPersona2(int id){
        controlPersis.eliminarPersona2(id);
    }
      
      public void eliminarPersona2(Experiencia secc){
        controlPersis.eliminarPersona2(secc);
    }
      
      public List<Experiencia> traerPersonas2(){
        return controlPersis.traerPersonas2();
    }   
      
}
