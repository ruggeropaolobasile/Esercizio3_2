import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutomobileComponent } from './automobile.component'; // Assicurati che il percorso sia corretto

@NgModule({
  declarations: [AutomobileComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AutomobileComponent]
})
export class AutomobileModule {}
