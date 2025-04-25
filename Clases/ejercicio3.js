// 3. Crear una clase CuentaBancaria que tenga un saldo privado y métodos públicos para depositar y retirar dinero.

class CuentaBancaria {
    #saldo
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial

    }
    depositar(cantidad){
        if (cantidad > 0) {
            this.#saldo += cantidad
            console.log(`Su saldo a sido actualizado, ha ingresado ${cantidad}`);
        } else {
            console.log("La cantidad de dinero a depositar debe ser positiva");
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad
            console.log(`Su saldo a sido actualizado, ha retirado ${cantidad}, su saldo actual es ${this.#saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
    verSaldo(){
        return this.#saldo
    }
}

let cuenta1 = new CuentaBancaria()

cuenta1.depositar(100)
cuenta1.retirar(50)
console.log( cuenta1.verSaldo());