import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosjavaService } from './Services/serviciosjava.service';
import { SimpleGlobal } from 'ng2-simple-global';
import { UtilService } from './Services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'Consulta de Casos';

  activarComponent: boolean = undefined;
  private subscription: Subscription;

  constructor(
    private servicios: ServiciosjavaService,
    private util: UtilService,
    private sg: SimpleGlobal,
  ) {
    this.getDatosPostM();
    setTimeout(() => {
      this.subscription = this.servicios.getParametroByName('', 'Param_Util').subscribe(
        data => {
          if (util.valCampoLleno(this.sg['params'])) {
            this.activarComponent = true;
          } else {
            this.activarComponent = false;
          }
          this.validacionVariables();
        }
      );
    }, 700);

  }

  validacionVariables(): void {
    if (!this.activarComponent) {
      this.util.alerta = {
        color: 'alerta-negativa',
        icono: 'fas fa-info-circle',
        texto: 'Variables no obtenidas, por favor actualice o comuníquese con el administrador.'
      };
      this.util.lanzarModalNotificacion();
    }
  }

  getDatosPostM(): void {
    let mensaje: any;
    function reciber(e) {
      mensaje = e.data;
      if (typeof mensaje !== 'object') {
        const datosRec = mensaje.split(',');
        window.sessionStorage.clear();
        for (var i = 0; i < datosRec.length; i++) {
          const valor = datosRec[i].split(':');
          window.sessionStorage.setItem(valor[0], valor[1]);
        }
      }
    }
    window.addEventListener('message', reciber);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
