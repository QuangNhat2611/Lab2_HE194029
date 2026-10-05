import React from "react";
import { useTheme } from "../context/Themecontext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return React.createElement(
    "header",
    { className: "header-box" },
    React.createElement("h1", { className: "header-title" }, "Mini Task Manager"),
    React.createElement(
      "button",
      { onClick: toggleTheme, className: "theme-btn" },
      darkMode ? "☀️ Light" : "🌙 Dark"
    )
  );
}