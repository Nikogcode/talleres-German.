let letra = prompt("Ingrese una letra")

function esVocal (letra){

switch (letra) {
    case "a": case "e": case "i": case "o": case "u": case "A": case "E": case "I": case "O": case "U":
        alert(`${letra} es vocal`)
        break;

    default:
        alert(`${letra} no es vocal`)
        break;
}
}

esVocal (letra)

