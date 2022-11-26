import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

const routes: Routes = [
  { path: '', component: VideojuegoComponent },
  { path: 'detalle', component: DetalleVideojuegoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }