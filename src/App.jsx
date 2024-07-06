import { useEffect, useState } from 'react';
import Header from './components/Header';
import './index.css'
import SearchFilter from './components/SearchFilter';
import CountryCard from './components/CountryCard';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [region, setRegion] = useState('')
  console.log('region..', region)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(respose => {
        setCountries(respose.data)
      })
      .catch(error => {
        console.log('error feetching countries:', error)
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
  }, [searchTerm, region, countries]);

  return (
    <div>
      <Header />
      <main className='px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-6'>
        <SearchFilter 
          onSearch={setSearchTerm}
          onFilter={setRegion}
        />
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredCountries.map(country => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
