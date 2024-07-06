import { RiArrowDownSLine, RiSearchLine } from "@remixicon/react";
import { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
     const [filterOpen, setFilterOpen] = useState(false)
     const [searchTerm, setSearchTerm] = useState('')

     const toggleFilter = () => {
          setFilterOpen(!filterOpen)
     }

     const handleSearchChange = event => {
          setSearchTerm(event.target.value)
          onSearch(event.target.value)
     }

     const handleFilterClick = (region) => {
          onFilter(region)
          setFilterOpen(false)
     }
     return (
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center mb-6 lg:mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
               <div className="relative w-full max-w-xs flex items-center justify-center">
                    <input
                         type="text"
                         placeholder="Search for a country..."
                         value={searchTerm}
                         onChange={handleSearchChange}
                         className="w-full p-2 pl-10 bg-neutral-white boreder rounded shadow-sm focus:outline-none"
                    />
                    <RiSearchLine
                         className="absolute left-4 w-4 h-4 text-neutral-darkGray"
                    />
               </div>

               <div className="relative">
                    <button
                         onClick={toggleFilter}
                         className=" flex justify-between items-center p-2 w-48 bg-neutral-white border rounded shadow-sm focus:outline-none"
                    >
                         Filter by Region
                         <RiArrowDownSLine className="w-4 h-4  inline-block  text-neutral-darkGray" />
                    </button>
                    {filterOpen && (
                         <ul className="absolute right-0 mt-2 w-48 bg-neutral-white border rounded shadow-md">
                              <li className="p-2 hover:bg-neutral-darkGray cursor-pointer" onClick={() => handleFilterClick('Africa')}>Africa</li>
                              <li className="p-2 hover:bg-neutral-darkGray cursor-pointer" onClick={() => handleFilterClick('Americas')}>America</li>
                              <li className="p-2 hover:bg-neutral-darkGray cursor-pointer" onClick={() => handleFilterClick('Asia')}>Asia</li>
                              <li className="p-2 hover:bg-neutral-darkGray cursor-pointer" onClick={() => handleFilterClick('Europe')}>Europe</li>
                              <li className="p-2 hover:bg-neutral-darkGray cursor-pointer" onClick={() => handleFilterClick('Oceania')}>Oceania</li>
                         </ul>
                    )}
               </div>
          </div>
     );
}

export default SearchFilter;
