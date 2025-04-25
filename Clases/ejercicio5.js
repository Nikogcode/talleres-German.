// 5. Crear una clase base Vehiculo que tenga un constructor con parámetros de peso y velocidad máxima, e implemente un método mover() que imprima un mensaje genérico. 
// Luego, crear dos subclases Carro y Bicicleta

class Vehiculo {
    constructor(peso, velmax) {
        this.peso = peso
        this.velmax = velmax
    }
    mover(){
        console.log("El vehiculo se está moviendo");        
    }
}

class Carro extends Vehiculo{
    mover(){
        console.log(`El carro se está moviendo`);
        console.log(`El carro pesa ${this.peso} y tiene una velocidad maxima de ${this.velmax}`);
    }
}

class Bicicleta extends Vehiculo{
    mover(){
        console.log(`La bicicleta se está moviendo`);
    }
}

let carro1 = new Carro("90kg", "100km/h")
let bicicleta1 = new Bicicleta

carro1.mover()
bicicleta1.mover()