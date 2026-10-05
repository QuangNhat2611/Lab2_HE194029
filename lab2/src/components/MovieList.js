import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movies, onViewDetail }) {
  if (movies.length === 0) {
    return React.createElement("div", { style: { padding: "10px 0", textAlign: "center" } }, "Không có dữ liệu.");
  }

  return React.createElement(
    "div",
    { className: "movie-list" },
    movies.map((movie) =>
      React.createElement(MovieItem, {
        key: movie.id,
        movie: movie,
        onViewDetail: onViewDetail
      })
    )
  );
}