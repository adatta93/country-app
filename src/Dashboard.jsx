import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";
import SearchBox from "./SearchBox";
import SelectRegion from "./SelectRegion";
import withSpinner from "./WithSpinner";

const DetailsWithSpinner = withSpinner(CountryDetails);

export default function Dashboard({ isDark }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryDtls, setCountryDtls] = useState([]);
  const [isDtlsFetching, setDtlsFetching] = useState(false);

  useEffect(() => {
    if (selectedCountry) {
      setDtlsFetching(true);
      axios
        .get(
          `https://restcountries.eu/rest/v2/name/${selectedCountry}?fullText=true`
        )
        .then((res) => {
          console.log(res.data);
          setDtlsFetching(false);
          setCountryDtls(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedCountry]);

  const chooseCountry = (cName) => {
    console.log("hi", cName);
    setDtlsFetching(true);
    setSelectedCountry(cName.country.name);
  };

  const selectBorderCountry = (borderCountry) => {
    setSelectedCountry(borderCountry.country.name);
  };

  const backToList = () => {
    setCountryDtls([]);
    setDtlsFetching(false);
    setSelectedCountry(null);
  };

  return (
    <>
      <div className="container">
        {countryDtls.length > 0 || isDtlsFetching ? (
          <>
            <button className="back-btn" onClick={backToList}>
              &#8592;&nbsp;Back
            </button>
            <DetailsWithSpinner
              isLoading={isDtlsFetching}
              countryDtls={countryDtls}
              selectBorderCountry={(props) => selectBorderCountry(props)}
            />
            {/* <CountryDetails countryDtls={countryDtls} /> */}
          </>
        ) : (
          <>
            <div className="search-panel">
              <SearchBox
                setCountries={setCountries}
                search={search}
                setSearch={setSearch}
                setRegion={setRegion}
                isDark={isDark}
              />
              <SelectRegion
                setCountries={setCountries}
                region={region}
                setSearch={setSearch}
                setRegion={setRegion}
              />
            </div>
            <CountryList
              countries={countries}
              chooseCountry={(props) => chooseCountry(props)}
            />
          </>
        )}
      </div>
    </>
  );
}
