import React, { useState } from "react";
import { useMovieFetch } from "../hooks/useMovieFetch"; // Custom hook for fetching movies
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config"; // Make sure these are defined in your config

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { state, loading, error } = useMovieFetch(searchTerm);
  
  // If movies data is not available, show a loading spinner
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching movies.</h2>;

  return (
    <div>
      <h1>Movie Database</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {state.movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px", textAlign: "center" }}>
            {/* Render the movie poster */}
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%" }}
              />
            ) : (
              <div style={{ width: "100%", height: "300px", background: "#ccc" }}>
                No Image
              </div>
            )}
            {/* Render the movie title */}
            <h3>{movie.title}</h3>
            {/* Render the movie rating */}
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




