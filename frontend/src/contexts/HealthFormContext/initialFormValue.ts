import { HealthFormModel } from "@/models/healthFormModel";

export const initialHealthFormValue: HealthFormModel = {
    info: {
        name: '',
        age: 0,
        weight: 0,
        height: 0,
    },
    symptoms: {
        symptoms: '',
        chronicDisease: null,
    },
    diagnostics: {
        diagnostics: [],
    },
    loading: false,
}