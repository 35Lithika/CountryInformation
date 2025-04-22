import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="border p-4 rounded shadow-md text-center uppercase">
      <h2 className="text-xl font-bold">{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <Link to={`/countries/${country.name}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default CountryCard;
