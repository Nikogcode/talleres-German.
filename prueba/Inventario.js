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

    eliminarJuego(nombreJuego) {
        const index = this.#juegos.findIndex(juego => juego.nombre === nombreJuego);
        if (index !== -1) 
            this.#juegos.splice(index, 1);
        }

    actualizarJuego(nuevoJuego) 
    {
     const index = this.#juegos.findIndex(juego => juego.nombre === nuevoJuego.nombre);
     if (index !== -1) {
        this.#juegos[index] = nuevoJuego;
        console.log(`Se ha actualizado el juego: ${nuevoJuego.nombre}`);
    } else {
        console.log("El juego no se encuentra en el inventario.");
    }
}
}


let inventario1 = new inventario();

inventario1.ingresarJuego({nombre: "Minecraft", precio: 100000, genero: "Sandbox"});

console.log(inventario1.verJuegos());

inventario1.eliminarJuego("Minecraft")

console.log(inventario1.verJuegos());

inventario1.ingresarJuego({ nombre: "GOW", precio: 50000, genero: "Guerra" });
console.log(inventario1.verJuegos());
inventario1.actualizarJuego({ nombre: "GOW", precio: 60000, genero: "Aventura" });
console.log(inventario1.verJuegos());