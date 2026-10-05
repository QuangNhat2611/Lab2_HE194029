import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return React.createElement(
    ThemeContext.Provider,
    { value: { darkMode, toggleTheme } },
    children
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}