interface Persona{
    Nombre:string,
    Apellido:string,
    Acercade:string,
    Titulos:[string,string]
}

let portfolio: Persona = {
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:["",""]
}

function GetNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent =nombre;
}

function GetApellido(apellido:string):string {
    const ape = document.getElementById("Apellido");
    ape.textContent =apellido;
    return portfolio.Apellido=apellido;
}

function showFile1(input):void{
    let file = input.files[0];

    let reader = new FileReader();
    reader.onload = function(progressEvent){
        var s=reader.toString();
        console.log(s);
        var arr = s.split('\n');
        GetNombre(arr[0]);
        GetApellido(arr[1]);
    };
    
} 