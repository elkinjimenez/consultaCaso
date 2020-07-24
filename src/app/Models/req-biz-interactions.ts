import { ReqHeaderRequest } from './parameters/req-header-request';

export class ReqBizInteraction {
  presencialChannel: boolean;
  idTurn: string;
  idEvent: number;
  description: string;
  externalTransactionId: string;
  interactionDirectionTypeCode: string;
  subject: string;
  channelTypeCode: number;
  customerCode: string;
  categoryCode: number;
  subCategoryCode: number;
  voiceOfCustomerCode: number;
  closeInteractionCode: number;
  domainName: string;
  userSignum: string;
  reason: string;
  regardingObjectId: string;
  biHeaderId: string;
  executionDate: string;
  typeObjectInteraction: string;
  service: string;
  headerRequestBizInteraction: ReqHeaderRequest;
}

