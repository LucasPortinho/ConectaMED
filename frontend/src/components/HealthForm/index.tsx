import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HealthFormTypes } from "@/contexts/HealthFormContext/healthFormActions"
import { useHealthFormContext } from "@/contexts/HealthFormContext/useHealthFormContext"
import { fetchAPI } from "@/utils/fetchAPI"

import { useEffect, useRef, useState } from "react"
import { ErrorAlert } from "../ErrorAlert"
import { RouterLink } from "../RouterLink"

export const FormCard = () => {
    const { state, dispatch } = useHealthFormContext()
    const [chronicDiseaseState, setChronicDiseaseState] = useState(() => {
      return !!state.symptoms.chronicDisease
    })
    const [hasErrors, setHasErrors] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const symptomsRef = useRef<HTMLInputElement>(null)
    const chronicDiseaseRef = useRef<HTMLInputElement>(null)
  
    const handleValueChange = (value: string) => {
      if (value === 'yes') {
        setChronicDiseaseState(true)
        return
      }
      setChronicDiseaseState(false)
    } 
  
    const saveSymptoms = () => {
      const symptoms = symptomsRef.current?.value.trim()
      const chronicDisease = chronicDiseaseRef.current?.value.trim()

      if (!symptoms) {
        setHasErrors(true)
        setErrorMessage('Envie pelo menos um sintoma')
        return
      }
      
      if (chronicDiseaseState && !chronicDisease) {
        setHasErrors(true)
        setErrorMessage('Informe sua doença crônica')
        return
      }

      closeAlert()
      dispatch({ type: HealthFormTypes.SAVE_SYMPTOMS, payload: { symptoms: symptoms, chronicDisease: chronicDisease ? chronicDisease : null }   })
    }

    const handleClick = () => {
      saveSymptoms()
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      saveSymptoms()
    }

    const closeAlert = () => {
      setHasErrors(false)
      setErrorMessage('')
    }

    useEffect(() => {
      if (hasErrors) {
        setTimeout(() => {
          closeAlert()
        }, 4000);
      }

    }, [hasErrors])

    useEffect(() => {
      if (!state.symptoms.symptoms) {
        return
      }

      if (!state.info.height || !state.info.weight || !state.info.age) {
        setHasErrors(true)
        setErrorMessage('Erro no envio das informações')
        return 
      }

      fetchAPI(state, dispatch)
    }, [state.symptoms])

    return (
      <>
        {hasErrors && errorMessage && (
          <ErrorAlert errorText={errorMessage} />
        )}

        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Insira seus sintomas</CardTitle>
            <CardDescription>Saiba tudo sobre seu possível diagnóstico e fale com um médico</CardDescription>
            </CardHeader>

            <CardContent>
            <form action="" onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="symptoms">Sintomas</Label>
                    <Input ref={symptomsRef} defaultValue={state.symptoms.symptoms} id="symptoms" placeholder="Seus sintomas" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="hasChronicDisease">Você tem alguma doença crônica?</Label>
                    
                    <Select onValueChange={handleValueChange}>

                    <SelectTrigger id="hasChronicDisease">
                        <SelectValue placeholder="Sim ou não?"/>
                    </SelectTrigger>

                    <SelectContent position="popper" >
                        <SelectItem defaultChecked={true} value="yes">Sim</SelectItem>
                        <SelectItem value="no">Não</SelectItem>
                    </SelectContent>

                    </Select>

                </div>

                {!!chronicDiseaseState && (
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="chronicDisease">Qual doença crônica?</Label>
                    <Input ref={chronicDiseaseRef} defaultValue={state.symptoms.chronicDisease || ''} id="chronicDisease" placeholder="Sua doença crônica" />
                    </div>
                )}

                </div>
            </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              <RouterLink href="/diagnostics" className="w-full">
                <Button onClick={handleClick} className='w-full'>Salvar</Button>
              </RouterLink>
            </CardFooter>

        </Card>
      </>
    )
}
