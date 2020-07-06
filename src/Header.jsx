import React from "react";

export default function Header({ isDark, toggleDark }) {
  return (
    <div className="header-container">
      <div className="header-name">Countries App</div>
      <div className="dark-mode">
        <img
          src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/moon_dark_mode_night-128.png"
          title={`${isDark ? "Show Light Mode" : "Show Dark Mode"}`}
          alt="toggle mode"
          onClick={() => toggleDark(!isDark)}
          height="30"
          width="30"
          style={
            isDark
              ? { filter: "invert(1) contrast(1.5)" }
              : { filter: "invert(0) contrast(1.5)" }
          }
        />
      </div>
    </div>
  );
}
