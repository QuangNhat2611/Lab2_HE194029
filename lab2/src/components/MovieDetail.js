import React from "react";

export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return React.createElement(
    "div",
    { className: "modal-overlay" },
    React.createElement(
      "div",
      { className: "modal-content" },
      React.createElement("button", { onClick: onClose, className: "modal-close-x" }, "[X]"),
      React.createElement("h3", { style: { marginBottom: "10px", borderBottom: "1px dashed currentColor" } }, movie.title),
      React.createElement("p", null, `Genre: ${movie.genre}`),
      React.createElement("p", null, `Year: ${movie.year}`),
      React.createElement("p", null, `Rating:  ${movie.rating}`),
      React.createElement("p", null, `Director: ${movie.director}`),
      React.createElement("p", null, `Duration: ${movie.duration} minutes`),
      React.createElement("p", { style: { margin: "10px 0", borderTop: "1px dashed currentColor", paddingTop: "5px" } }, movie.description),
      React.createElement("button", { onClick: onClose, className: "btn-view", style: { marginTop: "10px" } }, "[Đóng]")
    )
  );
}