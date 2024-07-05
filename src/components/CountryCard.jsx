const CountryCard = ({ flag, name, population, region, capital }) => {
     return (
          <article className="bg-neutral-white rounded  shadow-md overflow-hidden">
               <img
                    src={flag}
                    alt={`Flag of ${name}`}
                    className="w-full h-40 object-cover"
               />
               <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">
                         {name}
                    </h2>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>
               </div>
          </article>
     );
}

export default CountryCard;
