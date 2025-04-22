import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import countryData from "../data";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const cached = localStorage.getItem("countries");
    if (cached) {
      setCountries(JSON.parse(cached));
    } else {
      localStorage.setItem("countries", JSON.stringify(countryData));
      setCountries(countryData);
    }
  }, []);

  return (
    <div className="p-6 text-center uppercase text-xl">
      <h1 className="text-3xl font-bold mb-6">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;