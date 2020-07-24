export class RespParameter {
  parameter?: Parameter;
  funcionality?: Parameter[];
  response: Response;
}

export class Parameter {
  id: number;
  name: string;
  type: string;
  message: string;
  urlAccess?: string;
  state: string;
  createUser: string;
  createDate: string;
}

export class Response {
  descripcionCode: string;
  menssageCode: string;
  returnCode: string;
}

