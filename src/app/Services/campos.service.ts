import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamposService {

  datosIniciales = {
    tipoCuenta: '',
    cuenta: '',
    perfil: '',
  };

  consulta = {
    tipoSolicitud: '',
    servicios: '',
    categoria: '',
    subcategoria: '',
    vozCliente: '',
    funcionalidad: '',
    boton: false,
  };

  constructor() { }
}
