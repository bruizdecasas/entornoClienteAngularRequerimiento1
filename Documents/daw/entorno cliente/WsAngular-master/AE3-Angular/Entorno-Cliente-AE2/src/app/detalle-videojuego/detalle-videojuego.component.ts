import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {
@Input() videojuego : Videojuego;
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.videojuego)
  }

}
