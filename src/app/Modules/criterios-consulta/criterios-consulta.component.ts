import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CamposService } from 'src/app/Services/campos.service';

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

}
