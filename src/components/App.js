import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const API_KEY = "9a1c122bc15ac85ae9067ed248532a1b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (query = "", pageNumber = 1) => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNumber}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setMovies((prevMovies) => (pageNumber === 1 ? data.results : [...prevMovies, ...data.results]));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery, page);
  }, [searchQuery, page]);

  return (
    <Router>
      <div className="app-container">
        <Navbar onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <button onClick={() => setPage(page + 1)} className="load-more">View More</button>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




