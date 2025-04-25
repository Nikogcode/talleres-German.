let altura = parseFloat(prompt("Ingrese la medida de la altura del rectangulo"))
let base = parseFloat(prompt("Ingrese la medida de la base del rectangulo"))

function area (altura,base){
    let calculo = altura * base;
    return calculo
}

let resultado = area (altura,base)

alert (`el area del rectangulo es ${resultado}`)