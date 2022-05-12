var portfolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var ape = document.getElementById("Apellido");
    ape.textContent = apellido;
    return portfolio.Apellido = apellido;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
        var s = reader.toString();
        console.log(s);
        var arr = s.split('\n');
        GetNombre(arr[0]);
        GetApellido(arr[1]);
    };
}
