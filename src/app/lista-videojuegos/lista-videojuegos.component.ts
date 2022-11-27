import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})

export class ListaVideojuegosComponent implements OnInit {

  listaVideojuegos: Videojuego[] = []
  videojuego: Videojuego | null = null

  constructor() {
    let videojuego: Videojuego = new Videojuego(1, "Diablo II", "Blizzard", "diablo2.jpeg", 8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(2, "Age of Empires III", "Ensemble Studios", "ageOfEmpires.jpeg", 7)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(3, "Call of Duty", "Ensemble Studios", "callDuty.jpeg", 7)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(4, "Super Smash Bros.", "Nintendo", "smash.jpeg", 6)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(5, "Mario Kart", "Nintendo", "marioKart.jpeg", 7)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(6, "League of Legends", "Riot Games", "lol.jpeg", 8)
    this.listaVideojuegos.push(videojuego)
  }

  ngOnInit() {
  }
}