import API from "../API"; // ✅ If API.js is inside /src/
 // ✅ Correct import path

import { useState, useEffect } from "react";

export const useMovieFetch = (searchTerm) => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(false);

            try {
                const movies = await API.fetchMovies(searchTerm);
                setState({ movies });
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };

        fetchMovies();
    }, [searchTerm]);

    return { state, loading, error };
};
