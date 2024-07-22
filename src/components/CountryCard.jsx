import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
     return (
          <Link to={`/country/${country.cca3}`} className="country-card">
               <article
                    className="bg-neutral-white dark:bg-neutral-darkBlue rounded  shadow-md overflow-hidden cursor-pointer"
               >
                    <img
                         src={country.flags.png}
                         alt={`${country.name.common} flag`}
                         className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                         <h2 className="text-xl font-bold mb-2">
                              {country.name.common}
                         </h2>
                         <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                         <p><strong>Region:</strong> {country.region}</p>
                         <p><strong>Capital:</strong> {country.capital}</p>
                    </div>
               </article>
          </Link>
     );
}

export default CountryCard;
