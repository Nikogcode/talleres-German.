// 4. Crear una clase base Animal con un método hacerSonido(), y dos subclases Perro y Gato que sobrescriban el método.

class Animal {
    constructor(especie) {
        this.especie = especie
    }
    hacerSonido(){
        console.log(`${this.especie} está haciendo sonido`);
        
    }
}

class Perro extends Animal {
    hacerSonido(){
        console.log("¡Guau!");
    }
}

class Gato extends Animal{
    hacerSonido(){
        console.log("¡Miau!");
    }
}

let perro1 = new Perro()
let gato1 = new Gato()

perro1.hacerSonido()
gato1.hacerSonido()