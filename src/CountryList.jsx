import React from "react";
import Country from "./Country";

export default function CountryList({ countries, chooseCountry }) {
  return (
    <div className="card-group">
      {countries.map((country, i) => (
        <Country key={i} country={country} chooseCountry={chooseCountry} />
      ))}
    </div>
  );
}
