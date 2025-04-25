class inventario{
    #juegos;
    constructor(){
        this.#juegos = [];
    }

    ingresarJuego(nuevojuego){
        this.#juegos.push(nuevojuego)
    }

    verJuegos(){
        return this.#juegos;
    }

    eliminarJuego(nombreJuego){
        const index = this.#juegos.findIndex(juego => juego.nombre === nombreJuego);
        if (index !== -1) {
            this.#juegos.splice(index, 1);
    }
  }
}

let inventario1 = new inventario();
inventario1.ingresarJuego({nombre: "Minecraft", precio: 100000, categoria: "Sandbox"});
console.log(inventario1.verJuegos());

inventario1.eliminarJuego("Minecraft")
console.log(inventario1.verJuegos());