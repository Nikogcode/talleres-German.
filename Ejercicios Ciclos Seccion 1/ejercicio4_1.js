let angulo1 = parseFloat(prompt("Ingrese el valor del primer angulo"))
let angulo2 = parseFloat(prompt("Ingrese el valor del segundo angulo"))
let angulo3 = parseFloat(prompt("Ingrese el valor del tercer angulo"))

if (angulo1+angulo2+angulo3 == 180) {
    alert("los angulos corresponden a un triangulo")
} else {
    alert("los angulos no corresponden a un triangulo")
}