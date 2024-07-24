import CountryCard from "./CountryCard";

const SectionCard = ({ filteredCountries, visibleCountries, }) => {
     return (
          <section className='section-card'>
               {filteredCountries.slice(0, visibleCountries).map(country => (
                    <CountryCard
                         key={country.cca3}
                         country={country}
                    />
               ))}
          </section>
     );
}

export default SectionCard;