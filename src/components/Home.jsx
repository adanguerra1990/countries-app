import { useState, useEffect } from "react"
import SearchFilter from "./SearchFilter"
import ShowMoreButtom from "./ShowMoreButtom"
import axios from "axios"
import Loading from "./Loading"
import SectionCard from "./SectionCard"
import countriesServices from "../services/countriesServices"

const Home = () => {
     const [countries, setCountries] = useState([])
     const [filteredCountries, setFilteredCountries] = useState([])
     const [searchTerm, setSearchTerm] = useState('')
     const [region, setRegion] = useState('')
     const [visibleCountries, setVisibleCountries] = useState(8)
     const [loading, setLoading] = useState(true)

     useEffect(() => {
          countriesServices
               .getAll()
               .then(data => {
                    setCountries(data)
                    setFilteredCountries(data)
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
          setVisibleCountries(prevCount => prevCount + 8)
     }

     if (loading) return <Loading />

     return (
          <div>
               <SearchFilter
                    onSearch={setSearchTerm}
                    onFilter={setRegion}
               />
               <SectionCard
                    filteredCountries={filteredCountries}
                    visibleCountries={visibleCountries}
               />
               <ShowMoreButtom
                    onClick={handleShowMore}
                    isVisible={visibleCountries < countries.length}
               />
          </div>
     );
}

export default Home;
