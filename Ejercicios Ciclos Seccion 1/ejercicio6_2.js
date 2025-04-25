let numero = parseInt(prompt("Ingrese un numero"))

switch (numero % 5) {
    case 0:
        alert("El numero que Ingresó es divisible entre 5")
        break;

    default:
        alert("El numero que Ingresó no es divisible entre 5")
        break;
}