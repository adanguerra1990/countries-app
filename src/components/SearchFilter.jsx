import { RiArrowDownSLine, RiSearchLine } from "@remixicon/react";
import { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
     const [filterOpen, setFilterOpen] = useState(false)
     const [searchTerm, setSearchTerm] = useState('')
     const [seletedRegion, setSelectedRegion] = useState('Filter by Region')

     const toggleFilter = () => {
          setFilterOpen(!filterOpen)
     }

     const handleSearchChange = event => {
          setSearchTerm(event.target.value)
          onSearch(event.target.value)
     }

     const handleFilterClick = (region) => {
          if (region === 'all') {
               onFilter('')
               setSelectedRegion('All')
          } else {
               onFilter(region)
               setSelectedRegion(region)
          }
          setFilterOpen(false)
     }
     return (
          <div className="search-filter">
               <div className="search-filter__input-container">
                    <input
                         type="text"
                         placeholder="Search for a country..."
                         value={searchTerm}
                         onChange={handleSearchChange}
                         className="search-filter__input"
                    />
                    <RiSearchLine
                         className="search-filter__icon "
                    />
               </div>

               <div className="relative mt-4 md:mt-0">
                    <button
                         onClick={toggleFilter}
                         className="search-filter__button"
                    >
                         {seletedRegion}
                         <RiArrowDownSLine className={`search-filter__arrow ${filterOpen ? 'search-filter__arrow--open' : ''}`}/>
                    </button>
                    {filterOpen && (
                         <ul className="search-filter__list">
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('Africa')}>Africa</li>
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('Americas')}>America</li>
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('Asia')}>Asia</li>
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('Europe')}>Europe</li>
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('Oceania')}>Oceania</li>
                              <li className="search-filter__list-item" onClick={() => handleFilterClick('all')}>All</li>
                         </ul>
                    )}
               </div>
          </div>
     );
}

export default SearchFilter;
