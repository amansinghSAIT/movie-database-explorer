const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // ✅ Secure API key from .env

const fetchMovies = async (searchTerm = "") => {
    const endpoint = searchTerm
        ? `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`
        : `${API_URL}movie/popular?api_key=${API_KEY}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        return data.results; // ✅ Returns an array of movies
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};

export default { fetchMovies };
