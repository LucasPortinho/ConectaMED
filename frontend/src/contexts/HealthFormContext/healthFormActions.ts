import { HealthFormModel } from "@/models/healthFormModel"

export enum HealthFormTypes {
    SAVE_INFO = 'SAVE_INFO',
    SAVE_SYMPTOMS = 'SAVE_SYMPTOMS',
    SAVE_DIAGNOSTIC = 'SAVE_DIAGNOSTIC',
}

export type HealthFormActions = {
    type: HealthFormTypes.SAVE_INFO,
    payload: HealthFormModel['info']
} | {
    type: HealthFormTypes.SAVE_SYMPTOMS,
    payload: HealthFormModel['symptoms']
} | {
    type: HealthFormTypes.SAVE_DIAGNOSTIC,
    payload: HealthFormModel['diagnostics']
}
