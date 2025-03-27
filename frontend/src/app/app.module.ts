import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AutomobileComponent } from './components/automobili/automobili.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    AutomobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '1.1-inserimento-cliente', component: ClienteComponent },
      { path: '1.2-inserimento-automobile', component: AutomobileComponent },
      { path: '2.1-visualizzazione-cliente', component: ClienteComponent },
      { path: '2.2-visualizzazione-automobile', component: AutomobileComponent },
      { path: '', redirectTo: '2.1-visualizzazione-cliente', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
