<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
           <h1>Datos de la sección</h1>
        <form action="SvSeccion" method="POST">
            <p><label>Dato 1: </label><input type="text" name="d1"></p>
            <p><label>Dato 2: </label><input type="text" name="d2"></p>
            <button type="submit">Enviar</button>
        </form>
        
        <h1>Ver datos</h1>
        <p>Haga click para ver personas</p>
        <form action="" method="">
            <button type="submit">Mostrar personas</button>
        </form>
        
        <h1>Eliminar datos</h1>
        <p>Ingrese id para eliminar dato</p>
        <form action="" method="">
            <p><label>Id: </label> <input type="text" name="id_elim"> </p>
            <button type="submit">Eliminar</button>
        </form>
    </body>
</html>
