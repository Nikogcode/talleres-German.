/*2.Cree un programa que lea dos numeros y muestre su producto, su modulo, su cociente, su suma y su resta*/

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))

let producto = numero1*numero2
let modulo = numero1%numero2
let cociente = numero1/numero2
let suma = numero1+numero2
let resta = numero1-numero2

alert(`sus resultados son
    producto= ${producto}
    modulo  = ${modulo}
    cociente= ${cociente}
    suma    = ${suma}
    resta   = ${resta}`)