import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

declare var jQuery: any;
declare var $: any;

@Injectable()
export class UtilService {

  @BlockUI() blockUI: NgBlockUI;
  alerta = {} as Alerta;

  constructor() { }

  // FUNCION DE BLOQUEAR PANTALLA
  bloquearUI(): void {
    this.blockUI.start();
  }

  desbloquearUI(): void {
    this.blockUI.stop();
  }

  lanzarModalNotificacion(): void {
    $('#modalNotifica').modal('show');
  }

  valCampoLleno(campo: any): boolean {
    if (campo === null || campo === undefined || campo === '') {
      return false;
    }
    return true;
  }

  valCamposVacios(campos: any[]): boolean {
    let validacion = true;
    campos.forEach(campo => {
      if (campo === null || campo === undefined || campo === '') {
        validacion = false;
      }
    });
    return validacion;
  }

}

interface Alerta {
  color: string;
  icono: string;
  texto: string;
}
