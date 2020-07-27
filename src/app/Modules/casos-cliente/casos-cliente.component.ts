import { Component, OnInit } from '@angular/core';
import { CamposService } from 'src/app/Services/campos.service';
import { Caso } from 'src/app/Models/caso';

@Component({
  selector: 'app-casos-cliente',
  templateUrl: './casos-cliente.component.html',
  styleUrls: ['./casos-cliente.component.css']
})
export class CasosClienteComponent implements OnInit {

  constructor(
    public campos: CamposService,
  ) { }

  ngOnInit(): void {

  }

  seleccionarCaso(caso: Caso): void {
    // this.campos.casoSeleccionado = caso;
    // if (this.campos.casoSeleccionado !== undefined) {
    //   this.util.habilitarBotonOpciones = true;
    // } else {
    //   this.util.habilitarBotonOpciones = false;
    // }
    // console.log('Casos seleccionado: ', this.campos.casoSeleccionado);
  }

}
