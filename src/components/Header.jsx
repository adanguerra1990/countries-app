import { RiMoonLine, RiSunLine } from "@remixicon/react"
import useTheme from "../context/useTheme"

const Header = () => {
  const { theme, toggleTheme } = useTheme() // Usa el hook para obtener el tema actual y la función para alternarlo.
  console.log('theme', theme)

  return (
    <header className='flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-6 bg-neutral-white dark:bg-neutral-darkBlue shadow-md '>
      <h1 className="md:text-2xl font-bold">Where in the world</h1>
      <button
        onClick={toggleTheme} //Llama a toggleTheme cuando se hace clic en el botón
        className="flex items-center space-x-2"
      >
        {theme === 'dark' ? <RiSunLine className="w-6 h-6" /> : <RiMoonLine className="w-6 h-6" />}
        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  )
}

export default Header
