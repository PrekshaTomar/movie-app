const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/300x400"
                    }
                    alt={movie.title}
                />

                <div className="modal-content">
                    <h2>{movie.title}</h2>
                    <p><b>Rating:</b> ⭐ {movie.vote_average}</p>
                    <p>
                        {movie.overview || "No description available"}
                    </p>

                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;