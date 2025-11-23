import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Visited Countries", country);
    const newVisitedCountries =[...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <p>Country Data: {countries.length}</p>
      <p>Visited Countries: {visitedCountries.length}</p>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>

      <div className= "visited-flag">
        {
          visitedFlags.map((flag, index)=> <img key={index} src={flag}/>)
        }
      </div>
      <div className="countries">
        {countries.map(country => 
          <Country
           key={country.cca3.cca3} 
           country={country} handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlag={handleVisitedFlag}></Country>
        )}
      </div>
    </div>
  );
};

export default Countries;
