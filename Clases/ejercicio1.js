// 1. Crear una clase Persona con un atributo nombre y un método caminar() que imprima un mensaje con el nombre.

class Persona {
    constructor(nombre) {

    this.nombre = nombre;
    }

    caminar() {
        console.log(`${this.nombre} está caminando.`);
        
    }
}

let persona1 = new Persona("Niko")

persona1.caminar(); 