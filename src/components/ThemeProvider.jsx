import { useState, useEffect } from "react";
import ThemeContext from './ThemeContext'

const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState('light')

     useEffect(() => {
          if (theme === 'dark') {
               document.documentElement.classList.add('dark')
          } else {
               document.documentElement.classList.remove('dark')
          }
     }, [theme]) //efecto que se ejecuta cada vez que theme cambia

     //alternar el tema entre 'light' y 'dark
     const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
     }
     return (
          // Proveer el valor del contexto, incluyendo el tema actual y la función para alternarlo
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
               {children} {/*Renderiza los componentes hijos que están envueltos por el proveedor*/}
          </ThemeContext.Provider>
     );
}

export default ThemeProvider;
