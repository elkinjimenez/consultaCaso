import { Caso } from './caso';

export interface RespConsultaCasos {
    isValid: boolean;
    description: string;
    results: Caso[];
}
