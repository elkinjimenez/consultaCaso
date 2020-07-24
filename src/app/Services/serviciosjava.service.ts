import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespParameter, Parameter } from './../Models/parameters/resp-parameter';
import { InfoServicio } from './../Models/info-servicio';
import { HttpGenericoService } from './HttpGenerico.service';
import { map } from 'rxjs/operators';
import { SimpleGlobal } from 'ng2-simple-global';
import { ReqBizInteraction } from '../Models/req-biz-interactions';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosjavaService {

  ser1 = '';
  ser2 = '';
  ser3 = '';
  ser4 = '';
  ser5 = '';
  ser6 = '';
  ser7 = '';

  infoServicio = {} as InfoServicio;

  constructor(
    private httpGenerico: HttpGenericoService,
    private sg: SimpleGlobal,
    private util: UtilService
  ) { }

  // funcion especial ya que carga los parametros necesarios
  getParametroByName(detalleError: string, nameParam: string): Observable<RespParameter> {
    this.infoServicio = {
      descripcion: 'consultar parametros de la base de datos',
      detallerError: detalleError
    };
    const URL = 'http://100.126.19.74:7001/WsIncidentsParams-web/webresources/IncidentsParam/parametersByName/?name=' + nameParam;
    return this.httpGenerico.get(URL, this.infoServicio).pipe(
      map(parameters => {
        let parametro = new RespParameter();
        parametro = parameters;
        this.sg['params'] = JSON.parse(parametro.parameter.message);
        this.cargarServidores();
        return parametro;
      })
    );
  }

  cargarServidores() {
    // SE DEBE MODIFICAR DEPENDIENDO DE LA CARGA DE LOS SERVIDORES DEL SERVICIO DEL PARAMETROS
    this.ser1 = this.sg['params'].servidores.ser1; // http://100.126.19.74:8091/
    this.ser2 = this.sg['params'].servidores.ser2; // http://172.23.3.128:8000/
    this.ser3 = this.sg['params'].servidores.ser3; // http://100.126.21.189:7777/
    this.ser4 = this.sg['params'].servidores.ser4; // http://172.24.42.214:8401/
    this.ser5 = this.sg['params'].servidores.ser5; // http://172.24.232.150:8443/
    this.ser6 = this.sg['params'].servidores.ser6; // http://100.126.0.150:12272/
    this.ser7 = this.sg['params'].servidores.ser7; // http://100.126.19.74:7001/
  }

  setPresencialBizInteraction(detalleError: string, data: ReqBizInteraction) {
    this.infoServicio = {
      descripcion: 'gestionar la apertura o finalizacion de la iteración',
      detallerError: detalleError
    };
    let dataRequestHeader = '';
    if (this.util.valCampoLleno(data.headerRequestBizInteraction)) {
      const fechaIgual = data.headerRequestBizInteraction.requestDate.replace(/:/g, '=');
      const fechaPuntos = data.headerRequestBizInteraction.requestDate;

      dataRequestHeader = JSON.stringify(data.headerRequestBizInteraction).replace(/,/g, '&').replace(/:/g, '=').replace(/"|{|}/gi, '');
      dataRequestHeader = dataRequestHeader.replace(fechaIgual, fechaPuntos);
    }

    delete data.headerRequestBizInteraction;
    const jsonData = JSON.stringify(data);
    console.log('Data de Bi:');
    console.log(jsonData);

    const URL = this.ser3 + 'BIZInteractions/Rest/V1.0/BizInteractionsApi/put/setPresencialBizInteraction/' + jsonData
      + '?' + dataRequestHeader;
    return this.httpGenerico.put(URL, null, this.infoServicio);
  }

  getFuncionality(detalleError: string): Observable<RespParameter> {
    this.infoServicio = {
      descripcion: 'consultar funcionalidades de la base de datos',
      detallerError: detalleError
    };
    const URL = this.ser7 + 'WsIncidentsParams-web/webresources/IncidentsParam/functionality/';
    // var listIdDeparmentsType = new Array<RespParameter>();
    return this.httpGenerico.get(URL, this.infoServicio).pipe(
      map(parameters => {
        const parametros = new RespParameter();
        parametros.funcionality = parameters.parameters;
        parametros.response = parameters.response;
        return parametros;
      })
    );
  }

}
