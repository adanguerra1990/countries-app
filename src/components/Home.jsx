import { useState, useEffect } from "react"
import SearchFilter from "./SearchFilter"
import CountryCard from "./CountryCard"
import ShowMoreButtom from "./ShowMoreButtom"
import axios from "axios"
import Loading from "./Loading"

const Home = () => {
     const [countries, setCountries] = useState([])
     const [filteredCountries, setFilteredCountries] = useState([])
     const [searchTerm, setSearchTerm] = useState('')
     const [region, setRegion] = useState('')
     const [visibleCount, setVisibleCount] = useState(8)
     const [loading, setLoading] = useState(true)

     useEffect(() => {
          axios.get('https://restcountries.com/v3.1/all')
               .then(respose => {
                    setCountries(respose.data)
                    setFilteredCountries(respose.data)
                    setLoading(false)
               })
               .catch(error => {
                    console.log('error feetching countries:', error)
                    setLoading(false)
               })
     }, [])

     useEffect(() => {
          let filtered = countries

          if (searchTerm) {
               filtered = filtered.filter(country =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
               )
          }

          if (region) {
               filtered = filtered.filter(country =>
                    country.region === region
               )
          }

          setFilteredCountries(filtered)
     }, [searchTerm, region, countries])

     const handleShowMore = () => {
          setVisibleCount(prevCount => prevCount + 8)
     }

     if (loading) return <Loading />

     return (
          <div>
               <SearchFilter
                    onSearch={setSearchTerm}
                    onFilter={setRegion}
               />
               <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filteredCountries.slice(0, visibleCount).map(country => (
                         <CountryCard
                              key={country.cca3}
                              country={country}
                         />
                    ))}
               </section>
               <ShowMoreButtom
                    onClick={handleShowMore}
                    isVisible={visibleCount < countries.length}
               />
          </div>
     );
}

export default Home;
