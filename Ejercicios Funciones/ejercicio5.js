let numero = parseInt(prompt("Ingrese el numero al cual quiere hallar su factorial"))

function facto (numero){
let factorial = 1;
for (let n = 1; n <= numero; n++) {
    factorial *= n;
}
return factorial;
}
let resultado = facto (numero)

alert(`El factorial de ${numero} es ${resultado}`)