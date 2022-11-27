import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: 'listado', component: ListaVideojuegosComponent },
  { path: 'detalle', component: DetalleVideojuegoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }