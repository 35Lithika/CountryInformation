import React from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();
  const countries = JSON.parse(localStorage.getItem("countries")) || [];
  const country = countries.find((c) => c.name === name);

  const handleSave = async () => {
    await fetch("http://localhost:5000/api/selected_country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(country),
    });
    alert("Country saved to database!");
  };

  if (!country) return <p className="text-xl">COUNTRY NOT FOUND</p>;

  return (
    <div className="text-center p-6 uppercase text-xl">
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Language:</strong> {country.language}</p>

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save Country
      </button>

      <Link to="/countries" className="block mt-6 text-blue-600 underline">← Back</Link>
    </div>
  );
};

export default CountryDetail;