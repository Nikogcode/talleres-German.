/*Cree un programa que calcule horas y minutos a partir de segundos */

let segundos = parseInt(prompt("Ingrese los segundos que quiere convertir en horas y minutos"))

let horas = Math.floor (segundos/3600);
let minutos = segundos/60;
let restante = minutos % 60;

alert(`horas: ${horas}  minutos: ${restante}`)