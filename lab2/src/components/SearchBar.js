import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return React.createElement("input", {
    type: "text",
    placeholder: "Tìm kiếm phim..........",
    value: searchTerm,
    onChange: (e) => setSearchTerm(e.target.value),
    className: "search-input"
  });
}