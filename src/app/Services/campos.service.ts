import { Injectable } from '@angular/core';
import { TableElement } from '../Models/resp-table-parameters';
import { Caso } from '../Models/caso';

@Injectable({
  providedIn: 'root'
})
export class CamposService {

  private listadoCasos = [] as Caso[];

  datosIniciales = {
    tipoCuenta: '',
    cuenta: '',
    perfil: ''
  };

  consulta = {
    tipoSolicitud: '',
    servicios: '',
    categoria: '',
    subcategoria: '',
    vozCliente: '',
    funcionalidad: '',
    boton: false
  };

  casosTecnicos = {
    estado: undefined,
    mensaje: '',
    casos: this.listadoCasos,
  };

  selectTipoSolicitud = [] as TableElement[];

  constructor() { }

}
