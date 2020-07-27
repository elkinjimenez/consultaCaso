export interface ReqHeaderRequest {
  transactionId?: string;
  system?: string;
  target?: string;
  user?: string;
  password?: string;
  requestDate?: string;
  traceabilityId?: string;
  idBusinessTransaction?: string;
  idApplication?: string;
  ipApplication?: string;
  userApplication?: string;
  startDate?: string;
  idESBTransaction?: string;
  userSession?: string;
  channel?: string;
  additionalNode?: string;
}
