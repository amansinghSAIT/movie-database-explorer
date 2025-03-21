export const useHomeFetch = () => {
    const [state, setState] = useState({ movies: [] });  // ✅ Initialize correctly
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);

                const response = await fetch("https://api.example.com/movies");
                const result = await response.json();  // ✅ Define `result`
                
                setState({ movies: result.movies });  // ✅ Use `result`
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return { state, loading, error };
};
