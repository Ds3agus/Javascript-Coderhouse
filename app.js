let cantidadPesos = "";
let dolar = 352;
let euro = 380;
let real = 72;
let libraesterlina = 433;
let resultado = 0;
let continuarOperando = true;

alert("Bienvenido al conversor de moneda extranjera. Aqui podra convertir dolares, euros, Libra esterlina y reales a pesos. Siga las instrucciones. Muchas gracias.")

const dividir = (a, b) => a / b;

do{
    cantidadPesos = prompt("Ingrese la cantidad de pesos a convertir.");

    while (isNaN(cantidadPesos) || cantidadPesos <= 0){
        alert("Ingrese una cantidad valida.");
        cantidadPesos = parseInt(prompt("Vuelva a ingresar la cantidad de pesos a convertir."));
    }

    let moneda = prompt("Ingrese la moneda a convertir", "Ej: dolar");

switch(moneda){
    case "dolar":
        resultado = dividir(cantidadPesos, dolar);
        break;
    case "euro":
        resultado = dividir(cantidadPesos, euro);
        break;
    case "real":
        resultado = dividir(cantidadPesos, real);
        break;
    case "libra esterlina":
        resultado = dividir (cantidadPesos, libraesterlina)
        break;
    default:
        alert("La moneda ingresada no corresponde a una valida.")
        continue
}

alert("La conversion de " + moneda + " a pesos de: " + cantidadPesos + " pesos. Da un total de: " + resultado.toFixed(2) + " " + moneda + "(s)")

continuarOperando = confirm("Quiere seguir operando?")

if (!continuarOperando){
    let terminarOperacion = confirm("Quiere dejar de operar?");
    if(terminarOperacion){
        alert("Gracias por operar con nosotros. Esperemos que haya sido de su agrado!");
    }
}

} while (continuarOperando);
