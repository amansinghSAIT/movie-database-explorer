import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "9a1c122bc15ac85ae9067ed248532a1b";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average} / 10</p>
      <p><strong>Runtime:</strong> {movie.runtime} mins</p>
      <p><strong>Genres:</strong> {movie.genres?.map(genre => genre.name).join(", ")}</p>
    </div>
  );
};

export default MovieDetails;















