// 10. Crear una clase base InstrumentoMusical con un método tocar() que debe ser implementado por las clases hijas.

class InstrumentoMusical {
    constructor(nombre) {
        this.nombre = nombre
    }
    tocar(){
        console.log(`Él sabe tocar ${this.nombre}`);
    }
}

class Intrumento extends InstrumentoMusical{
    constructor(nombre, tipo) {
        super(nombre)
        this.tipo = tipo
    }
    escucharInstrumento(){
        console.log(`A él le gusta escuchar cuando tocan la ${this.nombre} ${this.tipo}`);
    }
}

let intrumento1 = new Intrumento("Guitarra", "Electrica")

intrumento1.tocar()
intrumento1.escucharInstrumento()