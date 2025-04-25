let angulo1 = parseFloat(prompt("Ingrese el valor del primer angulo"))
let angulo2 = parseFloat(prompt("Ingrese el valor del segundo angulo"))
let angulo3 = parseFloat(prompt("Ingrese el valor del tercer angulo"))

let suma = angulo1 + angulo2 + angulo3;

switch(suma) {
    case suma = 180:
        alert("Los angulos corresponden a un triangulo")
        break;

    default:
        alert("Los angulos no corresponden a un triangulo")    
        break;
}