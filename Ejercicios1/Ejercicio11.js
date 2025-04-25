/*Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados */


let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;
let suma = dado1 + dado2

alert(`En el dado 1 salió ${dado1} en el dado 2 salió ${dado2}

su suma es ${suma}`)