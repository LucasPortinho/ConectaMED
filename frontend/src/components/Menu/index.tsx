import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { useTheme } from "@/contexts/Theme/useTheme"
import { RouterLink } from "../RouterLink"


export const Menu = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Menubar className="absolute top-0 mt-[20px]">
            <MenubarMenu>
                <MenubarTrigger>
                    <RouterLink href="/">Seus dados</RouterLink>    
                </MenubarTrigger>                
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>
                    <RouterLink href="/diagnostics">Diagnósticos</RouterLink>
                </MenubarTrigger>                
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Tema</MenubarTrigger>                
            </MenubarMenu>

        </Menubar>
    )
}