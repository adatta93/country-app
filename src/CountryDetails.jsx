import React from "react";
import BorderCountry from "./BorderCountry";

export default function CountryDetails({ countryDtls, selectBorderCountry }) {
  let allCurrencies = countryDtls.map((country) =>
    country.currencies.map((curr) => curr.name).join(",")
  );
  let allLangs = countryDtls.map((country) =>
    country.languages.map((curr) => curr.name).join(",")
  );
  return (
    <>
      {countryDtls.map((country, i) => (
        <div key={i} className="details-container">
          <div className="details-flag">
            <img alt="flag" src={country.flag} />
          </div>
          <div className="details-content">
            <h2>{country.name}</h2>
            <div className="details-row">
              <div className="left-col">
                <p>
                  <b>Native Name:</b> {country.nativeName}
                </p>
                <p>
                  <b>Population:</b> {country.population}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Sub Region:</b> {country.subregion}
                </p>
                <p>
                  <b>Captial:</b> {country.capital}
                </p>
              </div>
              <div className="right-col">
                <p>
                  <b>Top Level Domain:</b> {country.topLevelDomain}
                </p>
                <p>
                  <b>Currencies:</b> {allCurrencies}
                </p>
                <p>
                  <b>Languages:</b> {allLangs}
                </p>
              </div>
            </div>
            <div className="border-country">
              <div className="country-label">Border Countries:</div>
              <BorderCountry
                borders={country.borders}
                selectBorderCountry={selectBorderCountry}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
