import { MainTemplate } from "@/templates/Main"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useHealthFormContext } from "@/contexts/HealthFormContext/useHealthFormContext"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import { Separator } from "../ui/separator"
import { RouterLink } from "../RouterLink"

export const Diagnostics = () => {
    const { state } = useHealthFormContext()

    return (
        <MainTemplate>
            <Carousel className="w-[400px] max-w-xs">

                <CarouselContent>

                    {state.diagnostics.diagnostics?.length > 0 ? ( 

                    state.diagnostics.diagnostics.map((diagnostic, index) => (

                    <CarouselItem key={index}>
                        <div className="p-3">
                            <Card>

                                <CardHeader>
                                    <CardTitle>{diagnostic.diagnosticTitle}</CardTitle>
                                    <CardDescription>{diagnostic.diagnosticDescription}</CardDescription>
                                </CardHeader>

                                <Separator />

                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {diagnostic.diagnosticContent}
                                </CardContent>

                                <CardFooter>
                                    <div className="w-full gap-[10px] flex flex-col">
                                        <RouterLink href={diagnostic.videoUrl} target='_blank' className="w-full">
                                            <Button className="w-full" variant={"secondary"}>Vídeo</Button>
                                        </RouterLink>

                                        <RouterLink href={diagnostic.doctorUrl} target='_blank' className="w-full">
                                            <Button className="w-full" variant={'default'}>Encontrar com médico</Button>
                                        </RouterLink>
                                    </div>
                                </CardFooter>

                            </Card>
                        </div>
                    </CarouselItem>
                    ))
                    )
                    : (
                        <CarouselItem>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Nenhum diagnóstico</CardTitle>
                                        <CardDescription>Coloque seus dados e envie eles para conseguir seu diagnóstico</CardDescription>
                                    </CardHeader>

                                    <Separator />

                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        {state.loading ? (
                                            <div className="flex gap-[10px]">
                                                <p className="animate-spin ">
                                                    <Loader2 />
                                                </p>
                                                <p>Carregando...</p>
                                            </div>
                                            ) : 
                                            (
                                                <p>Nada encontrado...</p>
                                            )}
                                    </CardContent>

                                    <CardFooter>
                                        <RouterLink href="/" className="w-full">
                                            <Button className="w-full" variant={'secondary'}>Voltar</Button>
                                        </RouterLink>
                                    </CardFooter>
                                </Card>
                        </CarouselItem>
                    )
                }

                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />

            </Carousel>
        </MainTemplate>
    )
}