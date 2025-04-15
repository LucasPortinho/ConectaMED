import { Container } from "@/components/Container"
import { Menu } from "@/components/Menu"
import { SiteFooter } from "@/components/SiteFooter"

interface MainTemplateProps {
    children: React.ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <Container>
            <Menu />

            {children}
            
            <SiteFooter />
        </Container>
    )
} 