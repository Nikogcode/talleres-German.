// 8. Crear una clase Empleado con atributos nombre y salario. Que implemente un método trabajar(). Implemente encapsulación.

class Empleado {
    #nombre
    #salario
    constructor(nombre, salario) {
        this.#nombre = nombre
        this.#salario = salario
    }

    getNombre(){
        return this.#nombre
    }

    setNombre(nombre){
        this.#nombre = nombre
    }
    trabajar(){
        console.log(`${nombre} está trabajando`);
    }
}

