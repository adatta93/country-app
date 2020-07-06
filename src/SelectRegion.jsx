import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SelectRegion({
  setCountries,
  region,
  setRegion,
  setSearch,
}) {
  const [isOpen, setOpen] = useState(false);
  const [isFetching, setFetching] = useState(false);

  /* For Region Filter */
  useEffect(() => {
    if (region) {
      axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
          setSearch("");
          setFetching(false);
        })
        .catch((error) => console.log(error));
    }
  }, [region, setCountries, setSearch]);

  useEffect(() => {
    function close(event) {
      setOpen(false);
    }
    if (isOpen) {
      window.addEventListener("click", close);
    } else {
      window.removeEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [isOpen]);

  const onRegionClick = (regionName) => {
    setRegion(regionName);
    setOpen(false);
    setFetching(true);
  };

  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
        onClick={() => setOpen(!isOpen)}>
        <div className="dd-header-title">{region || "Filter by Region"}</div>
        <svg
          focusable="false"
          className={`dd-header-icon ${isOpen ? "open" : "close"}`}
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          fill="#aaa"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
        {isFetching && (
          <div className="spinner-overlay small">
            <div className="spinner-container"></div>
          </div>
        )}
      </button>
      {isOpen && (
        <ul className="dd-list">
          <li className="dd-list-item" onClick={() => onRegionClick("Africa")}>
            Africa
          </li>
          <li
            className="dd-list-item"
            onClick={() => onRegionClick("Americas")}>
            Americas
          </li>
          <li className="dd-list-item" onClick={() => onRegionClick("Asia")}>
            Asia
          </li>
          <li className="dd-list-item" onClick={() => onRegionClick("Europe")}>
            Europe
          </li>
          <li className="dd-list-item" onClick={() => onRegionClick("Oceania")}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}
