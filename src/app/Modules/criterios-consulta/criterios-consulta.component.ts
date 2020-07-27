import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/Services/campos.service';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';

@Component({
  selector: 'app-criterios-consulta',
  templateUrl: './criterios-consulta.component.html',
  styleUrls: ['./criterios-consulta.component.css']
})
export class CriteriosConsultaComponent implements OnInit {

  // CAMPOS SELECTS
  constructor(
    public campos: CamposService,
    public util: UtilService,
    private servicios: ServiciosjavaService,
  ) { }

  ngOnInit(): void {
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
