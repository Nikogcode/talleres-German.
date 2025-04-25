/*Clase Persona

Atributo #nombre (privado)

Método público caminar() que imprima "[nombre] está caminando."

Clase Empleado que extiende Persona

Atributo #salario (privado)

Método público trabajar() que imprima "[nombre] está trabajando."

Método público setSalario(salario) y getSalario()

Método público setEdad(edad) que llama al método de la clase base Persona

Clase CuentaBancaria

Atributo privado #saldo

Método privado #actualizarSaldo(monto)

Métodos públicos depositar(monto) y retirar(monto) que usen #actualizarSaldo

Clase base Vehiculo

Atributos públicos marca, modelo

Método privado #encenderMotor()

Método público arrancar() que use #encenderMotor

Método mover() (sobrescrito por subclases)

Subclases Coche y Bicicleta de Vehiculo

Sobrescriben mover() con un mensaje distinto

Clase EmpresaTransporte

Atributo estático totalEmpleados

Método estático registrarEmpleado() que incremente ese número

Método asignarVehiculo(empleado, vehiculo) que imprime una relación
*/

class Persona {
    #Nombre
    constructor(Nombre) {
        this.#Nombre = Nombre
        
    }
    caminar() {
        console.log(`${this.#Nombre} está caminando`);   
    }
    getNombre() {
        return this.#Nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    }

class Empleado extends Persona {
    #salario
    constructor(Nombre, salario, edad) {
        super(Nombre)
        this.#salario = salario
        this.edad = edad
    }

    trabajar(){
        console.log(`${this.getNombre()} está trabajando`);
    }
    setSalario(salario){
        this.#salario = salario
    }
    getSalario(){
        return this.#salario
    }
    setEdad(edad) {
        super.setEdad(edad)
    }
}

class CuentaBancaria {
    #saldo
    constructor() {
        this.#saldo = 0
    }               
    #actualizarSaldo(cantidad) {
        this.#saldo += cantidad;
      }
    depositar(cantidad){
        if (cantidad > 0) {
            this.#actualizarSaldo(cantidad)
        } else {
            console.log("La cantidad a depositar debe ser mayor a 0");
            
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#actualizarSaldo(-cantidad)
        } else {
            console.log("Saldo insuficiente o cantidad invalida");
        }
    }
    verSaldo(){
        return this.#saldo
    }
}

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    #encenderMotor(){
        console.log("Motor encendido");
        
    }
    arrancar(){
        this.#encenderMotor()
        console.log(`${this.marca} ${this.modelo} ha marcado`);                 
    }
    mover(){
        console.log("El vehiculo se está moviendo");
        
    }
}                              

class Coche extends Vehiculo {
    mover(){
        console.log(`${this.marca} ${this.modelo} se está moviendo en la carretera`);
    }
}

class Bicicleta extends Vehiculo {
    mover(){
        console.log(`${this.marca} ${this.modelo} se está moviendo en el parque`);
    }
}

class EmpresaTransporte {
    static totalEmpleados = 0
    constructor(totalEmpleados) {
        EmpresaTransporte.totalEmpleados++;
    }
    static registrarEmpleado(){
        EmpresaTransporte.totalEmpleados++;
    }
    asignarVehiculo(empleado, vehiculo){
        console.log(`${empleado} conduce ${vehiculo}`);
    }
}

let empleado1 = new Empleado("Pepe", 100, 69)
let cuenta1 = new CuentaBancaria()
let coche1 = new Coche("Honda", "Civic")
let bicicleta1 = new Bicicleta("Specialized", "Enduro")
let empresa = new EmpresaTransporte()

empleado1.caminar()
empleado1.trabajar()
empleado1.setSalario(1000)
console.log(empleado1.getSalario())
empleado1.setEdad(19)
console.log(empleado1.edad)
cuenta1.depositar(50)
cuenta1.retirar(20)
console.log(cuenta1.verSaldo())
coche1.mover()
bicicleta1.mover()
empresa.asignarVehiculo(empleado1.getNombre(), `${coche1.marca} ${coche1.modelo}`);