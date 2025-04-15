import { HealthFormActions, HealthFormTypes } from '@/contexts/HealthFormContext/healthFormActions'
import { HealthFormModel } from '@/models/healthFormModel'
import axios from 'axios'

export const fetchAPI = async (state: HealthFormModel, dispatch: React.Dispatch<HealthFormActions>) => {
    const response = await axios.post("http://127.0.0.1:5000/api/v1/diagnostics", { ...state.symptoms, ...state.info })
    console.log(response)
    // console.log(response.data.diagnostics)
    dispatch({ type: HealthFormTypes.SAVE_DIAGNOSTIC, payload: {
        diagnostics: [
            ...response.data.response.diagnostics
        ]
    } })
} 