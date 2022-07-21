package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import logica.Controladora; 
import logica.Seccion;
 
@WebServlet(name = "SvSeccion", urlPatterns = {"/SvSeccion"})
public class SvSeccion extends HttpServlet {

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
        
            String dato1 = request.getParameter("d1");
            String dato2 = request.getParameter("d2");
        Seccion seccion = new Seccion(0,dato1,dato2);
        control.crearPersona(seccion);
        response.sendRedirect("index.jsp");
       
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
