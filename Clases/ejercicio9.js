// 9. Crear una clase Empleado y una subclase Gerente que sobrescriba un método trabajar()

class Empleado {
    constructor(nombre) {
        this.nombre = nombre
    }
    trabajar(){
        console.log(`${this.nombre} está trabajando`);
        
    }
}

class Gerente extends Empleado {
    trabajar(){
        console.log(`${this.nombre} está trabajando`);
        
    }
}

let empleado1 = new Empleado("Pepito")

empleado1.trabajar()