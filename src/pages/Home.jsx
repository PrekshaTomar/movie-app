import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const loadMovies = async (query = "") => {
        try {
            setLoading(true);
            setError(false);

            const data = await fetchMovies(query);

            // ✅ safe fallback
            if (!data || data.length === 0) {
                setMovies([]);
            } else {
                setMovies(data);
            }

        } catch (err) {
            console.error("Fetch Error:", err);
            setError(true);
            setMovies([]); // prevent crash UI
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <>
            <Navbar />
            <Hero />

            <div className="container">

                {/* 🔍 Search */}
                <SearchBar onSearch={loadMovies} />

                {/* 🎛️ Filters */}
                <div className="filter-bar">
                    <button onClick={() => loadMovies("")}>Popular</button>
                    <button onClick={() => loadMovies("action")}>Action</button>
                    <button onClick={() => loadMovies("comedy")}>Comedy</button>
                    <button onClick={() => loadMovies("romance")}>Romance</button>
                </div>

                {/* ⏳ Loader */}
                {loading && <Loader />}

                {/* ❌ Error */}
                {error && <Error />}

                {/* 📭 No Data */}
                {!loading && !error && movies.length === 0 && (
                    <p className="no-data">No movies found</p>
                )}

                {/* 🎬 Movies Grid */}
                <div className="grid">
                    {!loading &&
                        movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={() => setSelectedMovie(movie)}
                            />
                        ))}
                </div>
            </div>

            {/* 🎬 Modal */}
            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}

            <Footer />
        </>
    );
};

export default Home;