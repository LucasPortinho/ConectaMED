import { useEffect, useReducer } from "react"
import { HealthFormContext } from "./HealthFormContext"
import { healthFormReducer } from "./healthFormReducer"
import { initialHealthFormValue } from "./initialFormValue"

interface HealthFormProvider {
    children: React.ReactNode
}

export const HealthFormProvider = ({children}: HealthFormProvider) => {
    const [state, dispatch] = useReducer(healthFormReducer, initialHealthFormValue, () => {
        const localState = localStorage.getItem("state")

        if (!localState) return initialHealthFormValue
        const data = JSON.parse(localState)
        
        return {
            ...data,
            loading: false
        }
    })

    useEffect(() => {
        console.log('State mudou: ', state)
        localStorage.setItem("state", JSON.stringify(state))
    }, [state])

    return (
        <HealthFormContext.Provider value={{ state, dispatch }}>
            {children}
        </HealthFormContext.Provider>
    )
}