import { RiMoonLine } from "@remixicon/react"

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-6 bg-neutral-white shadow-md '>      
        <h1 className="md:text-2xl font-bold">Where in the world</h1>
        <button className="flex items-center space-x-2">
          <RiMoonLine className="w-6 h-6"/>
          <span>Dark Mode</span>
        </button>      
    </header>
  )
}

export default Header
