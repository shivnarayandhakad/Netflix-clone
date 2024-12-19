import React, { useEffect, useState } from 'react';
import axios from '../api/tmdb';
import './Row.css';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="row_poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
