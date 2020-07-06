import axios from "axios";
import React, { useEffect, useRef } from "react";
import searchIcon from "./search.svg";

export default function SearchBox({
  setCountries,
  search,
  setSearch,
  setRegion,
  isDark,
}) {
  const inpRef = useRef(null);
  /* For Type-ahead Search */
  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
          setRegion("");
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
          setRegion("");
        })
        .catch((error) => console.log(error));
    }
  }, [search, setCountries, setRegion]);

  return (
    <div className="search-container">
      <img
        alt="Search"
        src={searchIcon}
        onClick={() => inpRef.current.focus()}
        style={
          isDark
            ? { filter: "invert(1) contrast(0.5)" }
            : { filter: "invert(0) contrast(0.5)" }
        }
      />
      <input
        type="text"
        name="searchText"
        ref={inpRef}
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
