// 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] 
// Use ciclo for (con .length) en la solución de este problema

let arreglo = ["a", "b", "c", "d", "e", "f", "g"];

function detectar (letra) {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === letra){
            console.log("la letra está en el arreglo");
            return;
        }
        
        }  
        console.log("la letra no está en el arreglo");
    }

    detectar("t");