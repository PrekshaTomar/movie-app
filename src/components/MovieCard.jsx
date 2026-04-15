const MovieCard = ({ movie, onClick }) => {
    const movieLink = `https://www.themoviedb.org/movie/${movie.id}`;

    return (
        <div className="card" onClick={onClick}>
            <div className="card-img">
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/300x400"
                    }
                    alt={movie.title}
                />

                <span className="rating">⭐ {movie.vote_average}</span>

                <div className="overlay">
                    <p>
                        {movie.overview
                            ? movie.overview.slice(0, 100) + "..."
                            : "No description available"}
                    </p>

                    {/* 🔗 Link Button */}
                    <a href={movieLink} target="_blank" rel="noreferrer">
                        View Details
                    </a>
                </div>
            </div>

            <div className="card-content">
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;