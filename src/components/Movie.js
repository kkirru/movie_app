import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname: '/movie-detail',
            state: {
                fromNavigation: true,
                year, title, summary, poster, genres
            },

        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>

                <div className="movie__data">
                    <h2 className="movie__title">{title}</h2>
                    <h3 className="movie__year">{year}</h3>
                    <ul className="movie__genres"> {genres.map((genre, index) =>
                        <li key={index} className="genres__genre">{genre}</li>)}</ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;