// 11. Crear una clase Vehiculo con un atributo privado modelo, un atributo público marca, y un método privado encenderMotor() que sea usado en el método público arrancar().

class Vehiculo {
    #modelo
    constructor(modelo, marca) {
        this.#modelo = modelo
        this.marca = marca
    }
    #encenderMotor(){
       console.log("El motor está encendido");
        
    }
    arrancar(){
        this.#encenderMotor();
        return `${this.marca} ${this.#modelo} está arrancando`
    }
}

let carro1 = new Vehiculo("Mazda2", "Mazda")

console.log(carro1.arrancar());