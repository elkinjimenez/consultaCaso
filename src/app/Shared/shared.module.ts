import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionIteracionComponent } from './gestion-iteracion/gestion-iteracion.component';
import { ModalNotificaComponent } from './modal-notifica/modal-notifica.component';

@NgModule({
  declarations: [GestionIteracionComponent, ModalNotificaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ModalNotificaComponent
  ]
})
export class SharedModule { }
