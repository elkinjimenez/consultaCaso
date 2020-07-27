import { Injectable } from '@angular/core';
import { TableElement } from '../Models/resp-table-parameters';

@Injectable({
  providedIn: 'root'
})
export class CamposService {

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

  selectTipoSolicitud = [] as TableElement[];

  constructor() { }

}
