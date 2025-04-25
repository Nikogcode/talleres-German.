/* 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]: 
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo 
b) Agregue el elemento true usando push y verifique el cambio en el arreglo 
c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo 
d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo 
e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo */

let arreglo = [1,2,3,4,5,6,7,8,9,10]

//a
arreglo.push (345)
console.log(arreglo);

//b
arreglo.push (true)
console.log(arreglo)

//c
arreglo.push ("ADSO")
console.log(arreglo);

//d
arreglo.push (455, 78, false)
console.log(arreglo);

//e
arreglo.push ("ABcd", true, 21)
console.log(arreglo);
