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
import { HealthFormTypes } from "@/contexts/HealthFormContext/healthFormActions"
import { useHealthFormContext } from "@/contexts/HealthFormContext/useHealthFormContext"
import { useEffect, useRef, useState } from "react"
import { ErrorAlert } from "../ErrorAlert"

export const InfoCard = () => {
    const { state, dispatch } = useHealthFormContext()

    const [ageInputState, setAgeInputState] = useState<number | null>(() => {
        return state.info.age
    })
    const [weightInputState, setWeightInputState] = useState<number | null>(() => {
        return state.info.weight
    })
    const [heightInputState, setHeightInputState] = useState<number | null>(() => {
        return state.info.height
    })

    const [hasErrors, setHasErrors] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const nameInputRef = useRef<HTMLInputElement>(null)

    const handleAgeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[e\+\-]/gi, "");

        const ageNumber = Number(event.target.value)

        if (ageNumber > 200) {
            setHasErrors(true)
            setErrorMessage('Idade de 200 anos não documentada.')
            return
        }

        if (ageNumber < 0) {
            setHasErrors(true)
            setErrorMessage('Não existem idades negativas')
            return
        }

        setAgeInputState(ageNumber)
    }

    const handleWeightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[e\+\-]/gi, "");

        const weightNumber = Number(event.target.value)

        if (weightNumber < 0) {
            setHasErrors(true)
            setErrorMessage('Não existem pesos negativos')
            return
        } 

        if (weightNumber > 1000) {
            setHasErrors(true)
            setErrorMessage('Não existem pessoas com mais de 1 Tonelada')
            return
        }

        setWeightInputState(weightNumber)
    }

    const handleHeightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
    
        const cleanedValue = inputValue.replace(/[^0-9]/g, "");
        const heightNumber = Number(cleanedValue);
    
        if (isNaN(heightNumber)) {
            setHasErrors(true);
            setErrorMessage('Por favor, insira um número válido');
            return;
        }

        if (heightNumber < 0) {
            setHasErrors(true)
            setErrorMessage('Não existem alturas negativas')
            return
        }

        if (heightNumber > 300) {
            setHasErrors(true)
            setErrorMessage('Não existem pessoas com mais de 3m de altura')
            return
        }

        setHeightInputState(heightNumber)
    }

    const saveInfo = () => {
        const name = nameInputRef.current?.value
        console.log(nameInputRef.current)

        if ((!name || name.length >= 150)) {
            setHasErrors(true)
            setErrorMessage('Você deve possuir um nome e ele deve ter menos de 150 caracteres')
            return 
        }

        if (!ageInputState || !heightInputState || !weightInputState) {
            setHasErrors(true)
            setErrorMessage('Preencha os campos corretamente!')
            return
        }

        dispatch({ type: HealthFormTypes.SAVE_INFO, payload: {
            name: name,
            age: ageInputState,
            height: heightInputState,
            weight: weightInputState,
        } })
    }

    useEffect(() => {
        if (!hasErrors) return

        setTimeout(() => {
            setHasErrors(false)
            setErrorMessage('')
        }, 4000);

    }, [hasErrors])

    return (
      <>
        {hasErrors && errorMessage && (
          <ErrorAlert errorText={errorMessage} />
        )}

        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Insira suas informações</CardTitle>
            <CardDescription>Saiba tudo sobre seu possível diagnóstico e fale com um médico</CardDescription>
            </CardHeader>

            <CardContent>
            <form action="">
                <div className="grid w-full items-center gap-4">
                        
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" ref={nameInputRef} defaultValue={state.info.name} placeholder="Seu nome" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="age">Idade</Label>
                        <Input type='number' value={ageInputState || ''} onChange={handleAgeInputChange} id="age" placeholder="Sua idade" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="weight">Peso (em kg)</Label>
                        <Input type='number' value={weightInputState || ''} onChange={handleWeightInputChange} id="weight" placeholder="Seu peso"/>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="height">Altura (em cm)</Label>
                        <Input type='number' value={heightInputState || ''}  onChange={handleHeightInputChange} id="height" placeholder="Sua altura" />
                    </div>

                </div>
            </form>
            </CardContent>

            <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={saveInfo}>Salvar</Button>
            </CardFooter>

        </Card>
      </>
    )
}
