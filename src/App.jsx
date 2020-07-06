import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Header";

export default function App() {
  const [isDark, setDark] = useState(() => {
    let localStorageIsDark = localStorage.getItem("isDark");
    return localStorageIsDark === "true" ? true : false;
  });

  isDark
    ? document.body.classList.add("dark")
    : document.body.classList.add("light");

  const toggleDark = (mode) => {
    if (!isDark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setDark(true);
      localStorage.setItem("isDark", true);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setDark(false);
      localStorage.setItem("isDark", false);
    }
  };

  return (
    <>
      <Header isDark={isDark} toggleDark={toggleDark}></Header>
      <Dashboard isDark={isDark}></Dashboard>
    </>
  );
}
