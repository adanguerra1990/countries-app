import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
     return (
          <Link to={`/country/${country.cca3}`}>
               <article
                    className="country-card"
               >
                    <img
                         src={country.flags.png}
                         alt={`${country.name.common} flag`}
                         className="country-card__img"
                    />
                    <div className="country-card__content">
                         <h2 className="country-card__title ">
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
