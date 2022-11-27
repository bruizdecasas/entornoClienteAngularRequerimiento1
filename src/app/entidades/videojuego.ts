// Clase que guarda los atributos del videojuego
export class Videojuego {

    public constructor(public id: number, public nombre: string, public compania: string, public imagen: string, public valoracion: number) {
        this.id = id;
        this.nombre = nombre
        this.compania = compania
        this.imagen = imagen
        this.valoracion = valoracion
    }

}