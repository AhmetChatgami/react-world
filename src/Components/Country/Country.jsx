import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited]= useState(false);
//   console.log(country);
console.log(handleVisitedCountries);

  const hadnleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>Continents: {country.continents.continents}</p>
      <p>Language: </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "(Large Country)" : "(Small Country)"}
      </p>
      <button onClick={hadnleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
    </div>
  );
};

export default Country;
