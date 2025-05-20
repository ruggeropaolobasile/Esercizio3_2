import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // Modulo di routing
import { AutomobileModule } from './components/automobile/automobile.module'; // Modulo per le automobili
import { ClienteModule } from './components/cliente/cliente.module'; // Modulo per i clienti

import { AppComponent } from './app.component'; // Componente principale
import { HomeComponent } from './home/home.component'; // Componente home

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AutomobileModule,
    ClienteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
