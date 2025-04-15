import { HealthFormProvider } from "./contexts/HealthFormContext/HealthFormProvider"
import { ThemeProvider } from "./contexts/Theme/ThemeProvider"
import { MainRouter } from './routers/MainRouter/index'

export const App = () => {

  return (
    <ThemeProvider>
      <HealthFormProvider>
        <MainRouter />
      </HealthFormProvider>
    </ThemeProvider>
  )
}
