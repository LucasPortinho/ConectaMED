interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return <div className="flex flex-col justify-center align-center items-center h-screen">{children}</div>
}