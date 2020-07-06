import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BorderCountry({ borders, selectBorderCountry }) {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    let codes = "";
    borders.forEach((bor) => (codes += bor + ";"));
    console.log("Border Codes ", codes);
    axios
      .get(`https://restcountries.eu/rest/v2/alpha?codes=${codes}`)
      .then((res) => {
        console.log("R", res.data);
        setBorderCountries(res.data);
      })
      .catch((error) => console.log(error));
  }, [borders]);

  return (
    <div className="border-list">
      {borderCountries.map((country, i) => (
        <div
          key={i}
          className="border-name"
          onClick={(e) => selectBorderCountry({ country })}>
          {/* <Link to={c.name}>{c.name}</Link> */}
          {country.name}
        </div>
      ))}
    </div>
  );
}
