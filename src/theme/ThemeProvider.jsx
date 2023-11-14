/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    // const darkStyle = document.getElementById("dark-theme-style");
    // const handleStylesReady = () => {
    //   darkStyle.removeEventListener("load", handleStylesReady);
    // };
    // darkStyle.addEventListener("load", handleStylesReady);
    // darkStyle.removeAttribute("disabled");
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme: () => setDarkMode(!isDarkMode) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
