import { RiMoonLine } from "@remixicon/react"

const Header = () => {
  return (
    <header className='p-6  bg-neutral-white shadow-md flex justify-between items-center'>
      <h1 className="md:text-2xl font-bold">Where in the world</h1>
      <button className="flex items-center space-x-2">
        <RiMoonLine/>
        <span>Dark Mode</span>
      </button>
    </header>
  )
}

export default Header
