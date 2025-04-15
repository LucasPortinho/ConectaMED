import { useContext } from "react"
import { HealthFormContext } from "./HealthFormContext"

export const useHealthFormContext = () => {
    return useContext(HealthFormContext)
}