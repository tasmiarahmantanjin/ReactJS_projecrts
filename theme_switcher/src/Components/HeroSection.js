import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

// add anothe context 
	const [themeMode, setThemeMode] = useContext(ThemeContext);


  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center"
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is the paragraph section</p>
      <button onClick={() => {
		setThemeMode(themeMode === "light" ? "dark" : "light");
	}}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
		  border: `${currectTheme.border}`,
		  borderRadius: "20px"
        }}
      >
        {themeMode === "light" ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default HeroSection;
