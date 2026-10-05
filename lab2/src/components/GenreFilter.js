import React from "react";

export default function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
  return React.createElement(
    "select",
    {
      value: selectedGenre,
      onChange: (e) => setSelectedGenre(e.target.value),
      className: "select-filter"
    },
    genres.map((genre) =>
      React.createElement(
        "option",
        { key: genre, value: genre },
        genre === "All" ? "Tất cả thể loại ▼" : genre
      )
    )
  );
}