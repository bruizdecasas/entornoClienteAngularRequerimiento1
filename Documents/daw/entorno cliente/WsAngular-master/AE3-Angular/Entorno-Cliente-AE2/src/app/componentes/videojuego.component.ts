import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';


@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponente implements OnInit {


  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null

  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true

  idVideojuegoObligatorioOculto = true
  nombreObligatorioOculto = true
  companiaObligatorioOculto = true

  idVideojuego : number = 0
  nombre : string = ""
  compania : string = ""

  constructor() { 
    let videojuego : Videojuego = new Videojuego (1, "Diablo II", "Blizzard")
    console.log(videojuego)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(2, "Age of Empires III", "Ensemble Studios")
    console.log(videojuego)
    this.listaVideojuegos.push(videojuego)
  }

public seleccionar(videojuego: Videojuego) {
  console.log("Seleccionado")
  this.ocultarMensajesError()

  this.idVideojuego = videojuego.idVideojuego
  this.nombre = videojuego.nombre
  this.compania = videojuego.compania

  this.insertarDeshabilitado = true//Deshabilitamos insertar
  this.modificarBorrarDeshabilitado = false//Habilitamos modificar/borrar
}

public borrar() {
  for(let a=0; a<this.listaVideojuegos.length; a++){
    if( this.listaVideojuegos[a].idVideojuego == this.idVideojuego){
      this.listaVideojuegos.splice(a,1)//Eliminamos desde 'a' 1 elemento
      break;
    }
  }
  this.vaciar()
}

  public insertar(){
    if(!this.hayErroresEnFormulario()){
      this.videojuego = new Videojuego (this.idVideojuego, this.nombre, this.compania)
      this.listaVideojuegos.push(this.videojuego)
      this.vaciar()
      console.log("Videojuego añadido")
    }    
  }
  public vaciar() {
    this.idVideojuego = 0
    this.nombre = ""
    this.compania = ""

    this.insertarDeshabilitado = false//Habilitamos insertar
    this.modificarBorrarDeshabilitado = true//Deshabilitamos modificar/borrar

    this.ocultarMensajesError()
  }

  public ocultarMensajesError() {
    this.idVideojuegoObligatorioOculto = true
    this.nombreObligatorioOculto = true
    this.companiaObligatorioOculto = true
  }

  public hayErroresEnFormulario() : boolean{
    //Partimos de la base de que no hay errores en el formulario
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.idVideojuego==0){
      this.idVideojuegoObligatorioOculto = false//mostramos el mensaje de nombre obligatorio
      error = true
    }

    if(this.nombre.trim().length==0){
      this.nombreObligatorioOculto = false//mostramos el mensaje de nombre obligatorio
      error = true
    }
    
    if(this.compania.trim().length==0){
      this.companiaObligatorioOculto = false//mostramos el mensaje de universo obligatorio
      error = true
    }
    return error
  }

  public modificar(){    
    if(!this.hayErroresEnFormulario()){
      for(let a=0; a<this.listaVideojuegos.length; a++){
        let video : Videojuego = this.listaVideojuegos[a]
        if(video.idVideojuego == this.idVideojuego){
          this.listaVideojuegos[a].idVideojuego = this.idVideojuego
          this.listaVideojuegos[a].nombre = this.nombre
          this.listaVideojuegos[a].compania = this.compania
          break
        }
      }
      console.log("Modificando... " + this.videojuego?.toString())
      this.vaciar()
    }
  }

  ngOnInit() {

  }
}

