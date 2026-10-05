import React, { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { ThemeProvider, useTheme } from "./context/Themecontext";
import { movies as initialMovies } from "./data/movies";
import "./index.css"; 

function MainContent() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const genres = useMemo(() => {
    const list = initialMovies.map((m) => m.genre);
    return ["All", ...new Set(list)];
  }, []);

  const filteredMovies = useMemo(() => {
    return initialMovies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesGenre =
        selectedGenre === "All" || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  return (
    <div className="app-container">
      <div className="box-wrapper">
        <Header />

        <div className="controls-box">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="stats-bar">
          Tổng số: {initialMovies.length} | Đang hiển thị: {filteredMovies.length}
        </div>

        <MovieList
          movies={filteredMovies}
          onViewDetail={(movie) => setSelectedMovie(movie)}
        />

        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}