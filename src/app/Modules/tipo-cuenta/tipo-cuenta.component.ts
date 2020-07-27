
import { Component, OnInit } from '@angular/core';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/services/campos.service';

@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css']
})
export class TipoCuentaComponent implements OnInit {

  constructor(
    private servicios: ServiciosjavaService,
    public util: UtilService,
    public campos: CamposService
  ) { }

  ngOnInit(): void {

    // INICIALIZAR VALORES MODAL
    this.util.alerta = {
      color: 'alerta-negativa',
      icono: 'fa fa-info-circle',
      texto: ''
    };
    if (sessionStorage.length > 0) {

      this.campos.datosIniciales.cuenta = sessionStorage.getItem('account');
      this.campos.datosIniciales.perfil = sessionStorage.getItem('perfil');
      this.campos.datosIniciales.tipoCuenta = sessionStorage.getItem('tipoCuenta');

      if (!this.util.valCampoLleno(this.campos.datosIniciales.cuenta)) {
        this.util.alerta.texto = 'No se logró obtener el valor de la cuenta. Por favor actualice.';
        this.util.lanzarModalNotificacion();
      } else if (!this.util.valCampoLleno(this.campos.datosIniciales.perfil)) {
        this.util.alerta.texto = 'No se logró obtener el valor del perfil. Por favor actualice.';
        this.util.lanzarModalNotificacion();
      } else if (!this.util.valCampoLleno(this.campos.datosIniciales.tipoCuenta)) {
        this.util.alerta.texto = 'No se logró obtener el valor del tipo de cuenta. Por favor actualice.';
        this.util.lanzarModalNotificacion();
      }
    } else {
      // NO HAY VARIABLES DE SESSION ASIGNADAS
      this.util.alerta.texto = 'No se lograron obtener los campos necesarios para cargar completamente el formulario. Por favor actualice.';
      this.util.lanzarModalNotificacion();
    }
  }

}
