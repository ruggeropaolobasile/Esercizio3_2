// filepath: src/app/components/cliente/cliente.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ClienteComponent]
})
export class ClienteModule { }