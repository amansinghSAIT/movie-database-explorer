import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.vote_average} / 10</p> {/* Shows the rating */}
          <Link to={`/movie/${movie.id}`} className="view-details">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;









