import React from "react";

export default function MovieItem({ movie, onViewDetail }) {
  return React.createElement(
    "div",
    { className: "movie-item" },
    React.createElement(
      "div",
      null,
      `⭐ ${movie.title} (${movie.genre})`
    ),
    React.createElement(
      "button",
      { onClick: () => onViewDetail(movie), className: "btn-view" },
      "[Chi tiết]"
    )
  );
}