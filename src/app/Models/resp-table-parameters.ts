import { RespGeneral } from './resp-general';

export interface RespTableParameter {
  response: RespGeneral;
  tableElements?: TableElement[];
}

export interface TableElement {
  description: string;
  id: number;
  idElement: number;
  idTable: number;
}
