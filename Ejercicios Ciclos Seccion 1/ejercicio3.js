let numero1 = parseFloat(prompt("ingrese un numero"))
let numero2 = parseFloat(prompt("ingrese otro numero"))

if (numero1 == numero2) {
    alert(`los numeros son iguales`)
} else if (numero1 < numero2) {
    alert(`El numero mayor es ${numero2}`)
} else {
    alert(`El numero mayor es ${numero1}`)
}