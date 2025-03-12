import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobileComponent } from './components/automobili/automobili.component';
const routes: Routes = [
  {
    path: 'automobile/:id',  // Questo si aspetta un parametro 'id' nell'URL
    component: AutomobileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
