let lado = parseFloat(prompt("Ingrese la medida de un lado del cubo"))

function volumen (lado) {
    let calculo = lado**3
    return calculo
}

let resultado = volumen (lado)

alert (`el volumen del cubo es ${resultado}`)