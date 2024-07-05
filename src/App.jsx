import { useState } from 'react';
import Header from './components/Header';
import './index.css'
import SearchFilter from './components/SearchFilter';
import CountryCard from './components/CountryCard';

function App() {
  const countries = [
    {
      flag: 'path/to/germany-flag.jpg',
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
    },
    {
      flag: 'path/to/usa-flag.jpg',
      name: 'United States of America',
      population: '323,947,000',
      region: 'Americas',
      capital: 'Washington, D.C.',
    },
    {
      flag: 'path/to/brazil-flag.jpg',
      name: 'Brazil',
      population: '206,135,893',
      region: 'Americas',
      capital: 'Brasília',
    },
    {
      flag: 'path/to/iceland-flag.jpg',
      name: 'Iceland',
      population: '334,300',
      region: 'Europe',
      capital: 'Reykjavík',
    },
    {
      flag: 'path/to/afghanistan-flag.jpg',
      name: 'Afghanistan',
      population: '27,657,145',
      region: 'Asia',
      capital: 'Kabul',
    },
    {
      flag: 'path/to/aland-flag.jpg',
      name: 'Åland Islands',
      population: '28,875',
      region: 'Europe',
      capital: 'Mariehamn',
    },
    {
      flag: 'path/to/albania-flag.jpg',
      name: 'Albania',
      population: '2,886,026',
      region: 'Europe',
      capital: 'Tirana',
    },
    {
      flag: 'path/to/algeria-flag.jpg',
      name: 'Algeria',
      population: '40,400,000',
      region: 'Africa',
      capital: 'Algiers',
    },
  ];

  return (
    <div>
      <Header />
      <main className='container mx-auto pt-6'>
        <SearchFilter />
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {countries.map(country => (
            <CountryCard 
              key={country.name}
              {...country}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
