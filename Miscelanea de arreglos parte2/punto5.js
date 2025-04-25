// 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.

let b = ["abc", 4, 88, 99];

let copiaInd = [...b]; 

copiaInd[0] = "xyz";

console.log(b); 
console.log(copiaInd);