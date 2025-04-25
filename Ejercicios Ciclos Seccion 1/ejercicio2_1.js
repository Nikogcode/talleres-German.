let producto = prompt("Ingrese el nombre del producto")


    switch (producto){
        case "lentejas":
        case "arroz":
            alert(` ${producto} no paga IVA`)
            break;

        case "crema":
        case "vino":
            alert(`${producto} paga IVA`)
            break;   

        default:
            alert(`${producto} no fue reconocido`)
            break;
    }
