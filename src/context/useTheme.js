import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";

// Hook personalizado: Usa "useContext" para acceder al contexto del tema y retorna el valor
const UseTheme = () => {
     return useContext(ThemeContext)
}

export default UseTheme;
