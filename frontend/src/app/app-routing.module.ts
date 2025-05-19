import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AutomobileComponent } from './components/automobile/automobile.component'; // Aggiorna questo import
import { AutomobiliDisponibiliComponent } from './components/automobile-disponibile/automobile-disponibile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '1.1-inserimento-cliente', component: ClienteComponent },
  { path: '1.2-inserimento-automobile', component: AutomobileComponent },
  { path: '2.1-visualizzazione-cliente', component: ClienteComponent },
  { path: '2.2-visualizzazione-automobile', component: AutomobileComponent },
  { path: '2.3-automobili-disponibili', component: AutomobiliDisponibiliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
