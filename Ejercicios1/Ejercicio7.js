/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un iva de 19%*/

let precio = parseFloat(prompt("Ingrese el precio del producto"))

let calculo1 = precio * 0.19
let preciofinal = precio + calculo1

alert(`El precio final del producto es $${preciofinal}`)