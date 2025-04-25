// 12. Crear una clase Escuela con un atributo estático numEstudiantes que se incremente cada vez que se cree un nuevo objeto Estudiante

class Escuela {
    static numEstudiantes = 0

    constructor(nombre, grado) {
        this.nombre = nombre;
        this.grado = grado
        Escuela.numEstudiantes++;
    }

    static obtenerNumEstudiantes () {
        return Escuela.numEstudiantes;
    }

}

let Niko = new Escuela("nikolás", 11)
let Pepe = new Escuela("pepe", 10)
let Felipe = new Escuela("felipe", 11)

console.log(Escuela.obtenerNumEstudiantes())