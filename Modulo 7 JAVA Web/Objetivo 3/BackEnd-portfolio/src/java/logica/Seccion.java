package logica;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Seccion implements Serializable {
  @Id  
  @GeneratedValue(strategy = GenerationType.AUTO)
   private int id; 
   @Basic
   private String dato1;
   private String dato2;

    public Seccion(int id, String dato1, String dato2) {
        this.id = id;
        this.dato1 = dato1;
        this.dato2 = dato2;
    }

    public Seccion() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    
    
}
