
// Clase que guarda los atributos del videojuego
export class Videojuego{

    constructor(public idVideojuego : number, public nombre : string, public compania : string){
        this.idVideojuego = idVideojuego;
        this.nombre = nombre
        this.compania = compania
    }

    public toString() : string {
        return `ID: ${this.idVideojuego}, Nombre: ${this.nombre}, Universo: ${this.compania}`
    }

}