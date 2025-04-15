import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useEffect, useState } from "react";

interface ErrorAlertProps {
    errorText: string,
}

export const ErrorAlert = ({errorText}: ErrorAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50); // Atraso para garantir o montamento
  }, []);

  return (
      <Alert variant="destructive" className={`w-[350px] absolute top-0 mt-[20px] transition-transform duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {errorText}
        </AlertDescription>
      </Alert>
  )
}