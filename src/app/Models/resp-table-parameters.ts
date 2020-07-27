import { RespGeneral } from './resp-general';

export interface RespTableParameter {
  response: RespGeneral;
  tableElement: [TableElement];
}

export interface TableElement {
  description: string;
  id: string;
  idElement: string;
  idTable: string;
}
