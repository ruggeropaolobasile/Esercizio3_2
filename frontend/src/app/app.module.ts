// app.module.ts

import { NgModule } from '@angular/core'; // Importa NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; // Assicurati che il percorso sia corretto
import { ClienteComponent } from './components/cliente/cliente.component'; 
import { AutomobileComponent } from './components/automobili/automobili.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    AutomobileComponent // Aggiungi qui il tuo GarageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
