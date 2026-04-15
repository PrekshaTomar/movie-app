const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (query = "") => {
    try {
        const baseUrl = "https://api.themoviedb.org/3";

        const url = query.trim()
            ? `${baseUrl}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
            : `${baseUrl}/movie/popular?api_key=${API_KEY}`;

        console.log("Fetching from:", url);

        const res = await fetch(url);

        if (!res.ok) {
            console.log("API RESPONSE ERROR:", res.status);
            return [];
        }

        const data = await res.json();
        return data.results || [];

    } catch (error) {
        console.log("FETCH ERROR:", error);
        return [];
    }
};