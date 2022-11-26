import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponente } from './componentes/videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponente

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
