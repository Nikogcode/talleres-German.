let numero = parseInt(prompt("Ingrese un numero entre del 2 al 15"))

switch (numero) {
    case 2: case 3: case 5: case 7: case 11: case 13:
        alert(`${numero} es un numero primo`)
        break;

    default:
        alert(`${numero} no es un numero primo`)
        break;
} 