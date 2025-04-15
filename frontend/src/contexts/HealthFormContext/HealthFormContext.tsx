import { HealthFormModel } from "@/models/healthFormModel";
import { createContext } from "react";
import { HealthFormActions } from "./healthFormActions";
import { initialHealthFormValue } from "./initialFormValue";

interface HealthFormContextProps {
    state: HealthFormModel,
    dispatch: React.Dispatch<HealthFormActions>
}

const initialContextValue = {
    state: initialHealthFormValue,
    dispatch: () => {}
}

export const HealthFormContext = createContext<HealthFormContextProps>(initialContextValue)