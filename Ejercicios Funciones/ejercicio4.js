let nmax = parseFloat(prompt("Ingrese el numero maximo de su lista de numeros"))

function lista (nmax) {
    let result = "";
    for (let i = 1; i <= nmax; i++) {
        result += i + "\n";
    }
    return result;
}

alert(`lista \n${lista(nmax)}`)


