<%-- 
    Document   : experiencia
    Created on : 03/05/2022, 18:06:10
    Author     : Usuario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
      <h1>Experiencia</h1>
        <form action="SvExperiencia" method="POST">
            <p><label>Dato 1: </label><input type="text" name="de1"></p>
            <p><label>Dato 2: </label><input type="text" name="de2"></p>
            <button type="submit">Enviar</button>
        </form>
        
        <h1>Ver datos</h1>
        <p>Haga click para ver Experiencia</p>
        <form action="" method="">
            <button type="submit">Mostrar Experiencia</button>
        </form>
        
        <h1>Eliminar Experiencia</h1>
        <p>Ingrese id para eliminar Experiencia</p>
        <form action="" method="">
            <p><label>Id: </label> <input type="text" name="id_elim"> </p>
            <button type="submit">Eliminar</button>
        </form>
    </body>
</html>
