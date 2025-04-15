import { Diagnostic } from "./diagnosticModel"

export interface HealthFormModel {
    info: {
        name: string,
        age: number,
        weight: number,
        height: number,
    }
    symptoms: {
        symptoms: string,
        chronicDisease: string | null,
    }

    loading: boolean

    diagnostics: {
        diagnostics: Diagnostic[]
    }
}