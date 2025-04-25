/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10% */

let valor = parseFloat(prompt("Ingrese el valor del producto"))

let calculo1 = valor * 0.10
let preciofinal = valor - calculo1

alert(`El precio final del producto es $${preciofinal}`)