import { HealthFormModel } from "@/models/healthFormModel";
import { HealthFormActions, HealthFormTypes } from "./healthFormActions";

export const healthFormReducer: (state: HealthFormModel, action: HealthFormActions) => HealthFormModel = (state, action) => {
    switch (action.type) {

        case HealthFormTypes.SAVE_DIAGNOSTIC: {
            return {
                ...state,
                diagnostics: {
                    diagnostics: [
                        ...action.payload.diagnostics
                    ],
                },
                loading: false,
            }
        }

        case HealthFormTypes.SAVE_INFO: {
            return {
                ...state,
                info: {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height,
                    weight: action.payload.weight
                }
            }
        }

        case HealthFormTypes.SAVE_SYMPTOMS: {
            return {
                ...state,
                symptoms: {
                    symptoms: action.payload.symptoms,
                    chronicDisease: action.payload.chronicDisease
                },
                diagnostics: {
                    diagnostics: []
                },
                loading: true
                
            }
        }
    }
}