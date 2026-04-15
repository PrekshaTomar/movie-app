import { useState, useEffect } from "react";
import { fetchMovies } from "../api";

const SearchBar = ({ onSearch }) => {
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const delay = setTimeout(async () => {
            if (text.trim()) {
                const data = await fetchMovies(text);
                setSuggestions(data.slice(0, 5));
            } else {
                setSuggestions([]);
            }
        }, 500);

        return () => clearTimeout(delay);
    }, [text]);

    return (
        <div className="search-wrapper">
            <form onSubmit={(e) => { e.preventDefault(); onSearch(text); }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            {suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((item) => (
                        <p key={item.id} onClick={() => onSearch(item.title)}>
                            {item.title}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;