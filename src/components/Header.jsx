import { RiMoonLine, RiSunLine } from "@remixicon/react"
import useTheme from "../context/useTheme"

const Header = () => {
  const { theme, toggleTheme } = useTheme() // Usa el hook para obtener el tema actual y la función para alternarlo.

  return (
    <header className='header'>
      <h1 className="header__logo">Where in the world</h1>
      <button
        onClick={toggleTheme} //Llama a toggleTheme cuando se hace clic en el botón
        className="header__toggle-button"
      >
        {theme === 'dark' ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  )
}

export default Header
