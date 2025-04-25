/**/ 
let precio = parseFloat(prompt("Ingrese el valor de su electrodomestico"));
let Meses = parseInt(prompt("Ingrese el numero de meses en el que se pagará el credito"));
 let interes = 0.05;
 let interesMeses = interes * Meses
 let precioFinal = precio + (precio * interes)
 let pagoMeses = precioFinal / Meses;

 alert(`el precio final con intereses es de ${precioFinal}`)