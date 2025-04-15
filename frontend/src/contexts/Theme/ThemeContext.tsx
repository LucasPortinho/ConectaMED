import { ThemeProviderState } from "@/models/themeModels";
import { createContext } from "react";
import { initialState } from "./initialTheme";

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)