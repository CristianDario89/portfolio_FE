package persistencia;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import logica.Experiencia;
import logica.Seccion;
import persistencia.exceptions.NonexistentEntityException;

 
public class ControladoraPersistencia {
        SeccionJpaController seccionJPA = new SeccionJpaController();
        ExperienciaJpaController experienciaJPA = new ExperienciaJpaController();
        
    public ControladoraPersistencia() {
    }
   
   public void crearPersona(Seccion secc){
       seccionJPA.create(secc);
   }
   
   public void eliminarPersona(int id){
       try {
           seccionJPA.destroy(id);
       } catch (NonexistentEntityException ex) {
           Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
       }
   }
      
   public void eliminarPersona(Seccion secc){
       try {
           seccionJPA.destroy(secc.getId());
       } catch (NonexistentEntityException ex) {
           Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
       }
   }
           
   public List<Seccion> traerPersonas(){
                return  seccionJPA.findSeccionEntities();
             }   
     
   /*-----------------*/
   
   public void crearPersona2(Experiencia secc){
       experienciaJPA.create(secc);
   }
   
   public void eliminarPersona2(int id){
       try {
           experienciaJPA.destroy(id);
       } catch (NonexistentEntityException ex) {
           Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
       }
   }
      
   public void eliminarPersona2(Experiencia secc){
       try {
           experienciaJPA.destroy(secc.getId());
       } catch (NonexistentEntityException ex) {
           Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
       }
   }
           
   public List<Experiencia> traerPersonas2(){
                return  experienciaJPA.findExperienciaEntities();
             }  
}
