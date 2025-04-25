/*Cree un programa que genere un numero aleatorio dentro de un rango especifico */

let numero1 = parseInt(prompt("Ingrese el numero minimo"))
let numero2 = parseInt(prompt("Ingrese el numero maximo"))

let num1 = Math.floor(Math.random () * (numero2 - numero1 +1)) +numero1;

alert(`${num1}`)