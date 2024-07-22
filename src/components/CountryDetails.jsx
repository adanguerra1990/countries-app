import { RiArrowLeftLine, RiLoader4Fill } from "@remixicon/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
     const { countryCode } = useParams()
     const [country, setCountry] = useState(null)

     console.log('useParams', countryCode)

     useEffect(() => {
          axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
               .then(response => {
                    setCountry(response.data[0])
               })
               .catch(error => {
                    console.log('error fetching country details:', error)
               })
     }, [countryCode])

     if (!country) {
          return (
               <div className="flex items-center justify-center h-screen">
                    <RiLoader4Fill
                         className="text-6xl text-neutral-darkBlue dark:text-neutral-white animate-spin "
                         size={75}
                    />
               </div>
          )
     }

     return (
          <>
               <Link to='/' className="bg-neutral-white dark:bg-neutral-darkGray py-2 px-4 rounded shadow-md mb-10 inline-flex items-center font-bold"><RiArrowLeftLine className="mr-3" /> Back</Link>
               <article className="flex flex-col items-start md:items-center md:flex-row gap-10">

                    <img
                         src={country.flags.png}
                         alt={country.name.common}
                         className="w-full md:w-1/2 shadow-lg"
                    />

                    <div className="md:w-1/2">
                         <h2 className="text-2xl font-bold mb-5">
                              {country.name.common}
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <p>
                                        <strong>Native Name:</strong>
                                        {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common}
                                   </p>
                                   <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                   <p><strong>Region:</strong> {country.region}</p>
                                   <p><strong>Sub Region:</strong> {country.subregion}</p>
                                   <p><strong>Capital:</strong> {country.capital}</p>
                              </div>

                              <div>
                                   <p><strong>Top Level Domain:</strong> {country.tld}</p>
                                   <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(currencies => currencies.name).join(', ') : 'N/A'}</p>
                                   <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                              </div>
                         </div>

                         <div className="mt-8 block lg:flex  items-center ">
                              <h3 className="text-md font-bold lg:mr-3 m-0">Border Countries: </h3>
                              <div className="flex flex-wrap gap-2">
                                   {country.borders ? country.borders.map(border => {
                                        console.log('border', border)
                                        return (
                                             <Link
                                                  key={border}
                                                  to={`/country/${border}`}
                                                  className="bg-neutral-white dark:bg-neutral-darkGray px-4 py-2 rounded-md shadow-md"
                                             >
                                                  {border}
                                             </Link>
                                        )
                                   }) : 'None'}
                              </div>
                         </div>
                    </div>
               </article>
          </>
     );
}

export default CountryDetails;
