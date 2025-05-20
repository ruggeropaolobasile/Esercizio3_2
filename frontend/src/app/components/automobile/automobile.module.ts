import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutomobileComponent } from './automobile.component';
import { AutomobileDisponibileComponent } from '../automobile-disponibile/automobile-disponibile.component';

@NgModule({
  declarations: [
    AutomobileComponent,
    AutomobileDisponibileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AutomobileComponent,
    AutomobileDisponibileComponent
  ]
})
export class AutomobileModule { }
