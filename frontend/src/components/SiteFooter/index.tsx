export const SiteFooter = () => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row text-center">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                Sempre priorize a consulta de um médico.
                Programado por {" "}
                <a
                    href='https://github.com/LucasPortinho/'
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    Lucas Portinho.
                </a>
                <br />
                Grupo: Allan Ramos, Bruno Rossi, Lucas Portinho, Maycon Freitas, Pedro Henrique, Rafael Sampaio
                </p>
            </div>
        </footer>
    )
}