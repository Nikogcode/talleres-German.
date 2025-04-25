/* 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */

let arreglo = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]

//a
for (let i = 0; i < arreglo.length; i++) {
 for (let j = 0; j < arreglo[i].length; j++) {
    for (let k = 0; k < arreglo[i][j].length; k++) {
        console.log(arreglo[i][j][k]);
    } 
 } 
}

console.log("________________________");

//b
arreglo.forEach(i => {
   
    i.forEach(j => {
       
       j.forEach(k => {
           console.log(k)
       
      
    })})
   })