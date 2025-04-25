// 7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra, imprimiendo cada uno de sus elementos.

let arreglo = [2, 5, 7, 9];

function impArreglo(array) {
    array.forEach(numero => {
        console.log(numero); 
    });
}

recorrerArreglo([2, 5, 7, 9]);