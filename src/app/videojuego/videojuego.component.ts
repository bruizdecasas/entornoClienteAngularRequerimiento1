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

  constructor() { 
    let videojuego : Videojuego = new Videojuego(1, "Diablo II", "Blizzard", "imagen", 8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(2, "Age of Empires III", "Ensemble Studios", "imagen", 7)
    this.listaVideojuegos.push(videojuego)
  }
//  @param heroe representa el heroe que queremos cargar en el formulario

 public seleccionar(videojuego : Videojuego) : void{
 
   this.videojuego = videojuego
 }

  ngOnInit() {
    console.log(this.listaVideojuegos)
  }
}

