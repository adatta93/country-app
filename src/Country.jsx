import React from "react";

export default function Country({ country, chooseCountry }) {
  return (
    <div className="card" onClick={(event) => chooseCountry({ country })}>
      {/* <div className="flag-container"> */}
      <img className="flag" alt="Flag" src={country.flag} />
      {/* </div> */}
      <div className="card-body">
        <h5 className="card-title">{country.name}</h5>
        <p className="card-text">
          <span>Population: {country.population}</span>
        </p>
        <p className="card-text">
          <span>Region: {country.region}</span>
        </p>
        <p className="card-text">
          <span>Capital: {country.capital}</span>
        </p>
      </div>
    </div>
  );
}
