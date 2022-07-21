package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import logica.Experiencia;
import logica.Controladora; 
 
@WebServlet(name = "SvExperiencia", urlPatterns = {"/SvExperiencia"})
public class SvExperiencia extends HttpServlet {
    
 Controladora control = new  Controladora();
 
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
    }
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
       
        String de1 = request.getParameter("de1");
        String de2 = request.getParameter("de2");
         Experiencia experiencia = new Experiencia(0,de1,de2);
         control.crearPersona2(experiencia);
         response.sendRedirect("experiencia.jsp");
    }
 
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
