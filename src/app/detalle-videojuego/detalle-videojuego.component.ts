import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {
  videojuego: Videojuego = {
    id: 0,
    nombre: '',
    compania: '',
    imagen: '',
    valoracion: 0,
  }

  constructor(route: ActivatedRoute) {
    this.videojuego.id = route.snapshot.queryParams["id"];
    this.videojuego.nombre = route.snapshot.queryParams["nombre"];
    this.videojuego.compania = route.snapshot.queryParams["compania"];
    this.videojuego.imagen = route.snapshot.queryParams["imagen"];
    this.videojuego.valoracion = route.snapshot.queryParams["valoracion"];
  }

  ngOnInit(): void {
  }

}
