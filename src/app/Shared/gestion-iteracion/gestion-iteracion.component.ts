import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReqBizInteraction } from 'src/app/Models/req-biz-interactions';
import { Subscription } from 'rxjs';
import { SimpleGlobal } from 'ng2-simple-global';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-gestion-iteracion',
  template: ``
})
export class GestionIteracionComponent implements OnInit, OnDestroy {

  requestIteracion = {} as ReqBizInteraction;
  codApertura: number;
  codCierre: number;
  urlReturn: string;

  listCamposvalidar = new Array<any>();

  private subscription: Subscription;


  constructor(
    private sg: SimpleGlobal,
    private servicios: ServiciosjavaService,
    private util: UtilService,
  ) {
    // PARAMETRO DE SESSION STORAGE
    const url = sessionStorage.getItem('urlReturn');
    if (url !== undefined) { this.urlReturn = url; }
    this.requestIteracion = {} as ReqBizInteraction;

    // PARAMETROS SESSIONSTORAGE
    const turno = sessionStorage.getItem('idTurn');
    if (util.valCampoLleno(turno)) { this.requestIteracion.idTurn = turno; }

    const biHeader = sessionStorage.getItem('idHeader');
    if (util.valCampoLleno(biHeader)) { this.requestIteracion.biHeaderId = biHeader; }

    const numero = sessionStorage.getItem('documentNumber');
    if (util.valCampoLleno(numero)) { this.requestIteracion.customerCode = numero; }

    this.requestIteracion.headerRequestBizInteraction = this.sg['params'].headerGestionIteracion;
    this.requestIteracion.interactionDirectionTypeCode = this.sg['params'].reqBizInterDirectionTypeCode;


    // PARAMETROS BASE DE DATOS
    this.codApertura = this.sg['params'].ap_ci_turno.apertura;
    this.codCierre = this.sg['params'].ap_ci_turno.cierre;
  }

  ngOnInit(): void {
    console.log('Gestion Iteracion');
  }

  public inicializarIteracion(servicio: string): void {

    if (this.util.valCampoLleno(this.requestIteracion.idTurn)) {
      this.requestIteracion.idEvent = this.codApertura;
      this.requestIteracion.presencialChannel = true;
    } else {
      this.requestIteracion.presencialChannel = false;
    }
    this.requestIteracion.executionDate = (new Date().toISOString()).substring(0, 19);
    this.requestIteracion.headerRequestBizInteraction.requestDate = (new Date().toISOString()).substring(0, 19);
    this.requestIteracion.service = servicio;
    this.subscription = this.servicios.putPresencialBizInteraction('Error al hacer la apertura de iteración', this.requestIteracion)
      .subscribe(
        data => {
          console.log('Respuesta de inicializar iteración: ', data);
        }
      );
  }

  finalizarIteracion(servicio: string, retornar: boolean): void {

    if (this.util.valCampoLleno(this.requestIteracion.idTurn)) {
      this.requestIteracion.idEvent = this.codCierre;
      this.requestIteracion.presencialChannel = true;
    } else {
      this.requestIteracion.presencialChannel = false;
    }
    this.requestIteracion.executionDate = (new Date().toISOString()).substring(0, 19);
    this.requestIteracion.headerRequestBizInteraction.requestDate = (new Date().toISOString()).substring(0, 19);
    this.requestIteracion.service = servicio;
    this.subscription = this.servicios.putPresencialBizInteraction('Error al finalizar iteración', this.requestIteracion)
      .subscribe(
        data => {
          console.log('Respuesta de finalizar iteración: ', data);
          if (data.isValid === true) {
            if (retornar) {
              setTimeout(() => {
                window.top.location.replace(this.urlReturn);
              }, 1000);
            }
          } else {
            this.util.alerta = {
              color: 'alerta-negativa',
              icono: 'fa-info-circle',
              texto: 'No se pudo finalizar iteración. Por favor inténtelo de nuevo.'
            };
            this.util.lanzarModalNotificacion();
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
