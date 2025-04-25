/*3. Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
a) Leer e imprimir el elemento true
b) Leer e imprimir el elemento 1
c) Leer e imprimir el elemento 77
d) Leer e imprimir el elemento 88
e) Leer e imprimir el elemento ¿ */

let arreglo = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ];

//a
console.log(arreglo[1][0][1])

//b
console.log(arreglo[2][0][0][0][0])

//c
console.log(arreglo[0][1][1])

//d
console.log(arreglo[1][1][0][0])

//e
console.log(arreglo[3])