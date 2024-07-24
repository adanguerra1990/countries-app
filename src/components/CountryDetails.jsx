import { RiArrowLeftLine } from "@remixicon/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

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

     if (!country) return <Loading />

     return (
          <>
               <Link to='/' className="country-details__back-button"><RiArrowLeftLine className="mr-3" /> Back</Link>
               <article className="country-details">

                    <img
                         src={country.flags.png}
                         alt={country.name.common}
                         className="country-details__flags"
                    />

                    <div className="country-details__info">
                         <h2 className="country-details__title">
                              {country.name.common}
                         </h2>
                         <div className="country-details__text-container">
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

                         <div className="country-details__borders">
                              <h3 className="country-details__borders-title">Border Countries: </h3>
                              <div className="country-details__borders-buttons">
                                   {country.borders ? country.borders.map(border => {
                                        console.log('border', border)
                                        return (
                                             <Link
                                                  key={border}
                                                  to={`/country/${border}`}
                                                  className="country-details__borders-button"
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
