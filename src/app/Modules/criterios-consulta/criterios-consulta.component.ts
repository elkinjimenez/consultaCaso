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

}
