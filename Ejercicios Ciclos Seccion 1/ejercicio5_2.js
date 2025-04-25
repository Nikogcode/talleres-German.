let numero = parseFloat(prompt("Ingrese un numero"))

switch (numero % 2) {
    case 0:
        alert("El numero que ingresó es par")
        break;

    default:
        alert("El numero que ingresó es impar")
        break;
}