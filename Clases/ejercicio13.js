// 13. Crear una clase Cliente con un atributo privado saldo y un método privado calcularDescuento() que se utilice dentro de un método público aplicarDescuento()

class Cliente {
    #saldo
    constructor(saldo, precio, descuento) {
        this.#saldo = saldo
        this.precio = precio
        this.descuento = descuento
    }

    #calcularDescuento(){
        return this.precio - (this.precio * this.descuento)
    }

    aplicarDescuento(){
        this.precio = this.#calcularDescuento()
        return this.precio
    }

    pagar(){
        if (this.#saldo >= this.precio) {
            return "puede pagar"
        } else {
            return "no puede pagar"
        }
    }

    verPrecio(){
        return this.precio;
    }
}

let total = new Cliente(1000, 500, 0.10)
let total2 = new Cliente(200, 400, 0.20)

console.log(total.verPrecio());
console.log(total.aplicarDescuento());
console.log(total.pagar());

console.log("___________________________________");

console.log(total2.verPrecio());
console.log(total2.aplicarDescuento());
console.log(total2.pagar());