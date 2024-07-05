import { RiMoonLine } from "@remixicon/react"

const Header = () => {
  return (
    <header className='p-6  bg-neutral-white shadow-md '>
      <div className="flex justify-between items-center container m-auto">
        <h1 className="md:text-2xl font-bold">Where in the world</h1>
        <button className="flex items-center space-x-2">
          <RiMoonLine className="w-6 h-6"/>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header
