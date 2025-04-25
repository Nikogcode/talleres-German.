/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad */

let cantidad = parseFloat(prompt("Ingrese la cantidad "))
let porcentaje = parseFloat(prompt("Ingrese el porcentaje que sacará de la cantidad anteriormente ingresada"))

let calculo1 = cantidad * porcentaje /100

alert(`el ${porcentaje}% de ${cantidad} es ${calculo1}`)