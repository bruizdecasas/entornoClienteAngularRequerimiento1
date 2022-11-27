import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from '../entidades/videojuego';


@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})

export class VideojuegoComponent implements OnInit {
  @Input() juego: Videojuego = {
    id: 0,
    compania: '',
    nombre: '',
    valoracion: 0,
    imagen: ''
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}