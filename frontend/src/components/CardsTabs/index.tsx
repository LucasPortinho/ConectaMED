import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormCard } from "../HealthForm"
import { InfoCard } from "../InfoForm"

export const CardsTabs = () => {
    return (
        <Tabs defaultValue="info" className="w-[350px]">

            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Suas informações</TabsTrigger>
                <TabsTrigger value="symptoms">Seus sintomas</TabsTrigger>
            </TabsList>

            <TabsContent value="info">
                <InfoCard />
            </TabsContent>

            <TabsContent value="symptoms">
                <FormCard />
            </TabsContent>

        </Tabs>
    )
}
