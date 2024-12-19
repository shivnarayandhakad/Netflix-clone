import React, { useEffect, useState } from 'react';
import axios from '../api/tmdb';
import requests from '../api/requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            const randomMovie =
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                ];
            setMovie(randomMovie);
        }
        fetchData();
    }, []);

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h2 className="banner_description">{movie?.overview}</h2>
                <div className="banner_input">
                    <input type="email" placeholder="Email address" />
                    <button>Get Started</button>
                </div>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    );
}

export default Banner;
