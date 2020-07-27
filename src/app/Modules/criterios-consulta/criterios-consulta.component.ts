import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/Services/campos.service';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { RespTableParameter } from 'src/app/Models/resp-table-parameters';

@Component({
  selector: 'app-criterios-consulta',
  templateUrl: './criterios-consulta.component.html',
  styleUrls: ['./criterios-consulta.component.css']
})
export class CriteriosConsultaComponent implements OnInit {

  responseTablaParametrica: RespTableParameter;

  // CAMPOS SELECTS
  constructor(
    public campos: CamposService,
    public util: UtilService,
    private servicios: ServiciosjavaService,
  ) { }

  ngOnInit(): void {
    this.consumirTablaParamétrica();
  }

  validarCamposConsulta(): void {
    if (
      this.campos.consulta.tipoSolicitud !== '' &&
      this.campos.consulta.servicios !== '' &&
      this.campos.consulta.categoria !== '' &&
      this.campos.consulta.subcategoria !== '' &&
      this.campos.consulta.vozCliente !== '' &&
      this.campos.consulta.funcionalidad !== ''
    ) {
      this.campos.consulta.boton = true;
    } else {
      this.campos.consulta.boton = false;
    }
  }

  consumirTablaParamétrica(): void {
    const detalleError = 'No se logró obtener un listado de casos técnicos.';


    try {
      this.servicios.getTablaParametricaById(detalleError, '13').subscribe(
        data => {
          console.log('Tabla paramétrica:', data);
          this.responseTablaParametrica = data as RespTableParameter;
          if (this.responseTablaParametrica.response.returnCode === '00') {
            this.campos.selectTipoSolicitud = this.responseTablaParametrica.tableElements;
          } else {
            this.campos.selectTipoSolicitud = [];
            this.errorTraerCamposTipoSolicitud();
          }
          console.log('Tipos: ', this.campos.selectTipoSolicitud);
        }, error => {
          this.errorTraerCamposTipoSolicitud();
          console.log('Error Tabla paramétrica: ', error);
        }
      );
    } catch (error) {
      this.errorTraerCamposTipoSolicitud();
    }
  }

  errorTraerCamposTipoSolicitud(): void {
    this.util.alerta = {
      texto: 'No se logró traer el listado de tipos de solicitud. Por favor intente de nuevo.',
      icono: 'fa fa-info-circle',
      color: 'alerta-negativa'
    };
    this.util.lanzarModalNotificacion();
  }

  consultarCasos(): void {
    this.consumirConsultaCasos();
  }

  consumirConsultaCasos(): void {
    const detalleError = 'No se logró obtener un listado de casos técnicos.';
    this.servicios.getConsultaCasos(detalleError).subscribe(
      data => {
        console.log('Casos técnicos:', data);
      }, error => {
        console.log('Error consulta casos: ', error);
      }
    );
  }

}
