import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const MovieThumb = ({ image, movieId, clickable }) => {
    return (
        <StyledMovieThumb>
            {clickable ? (
                <Link to={`/${movieId}`} >
                    <img src={image} loading="lazy" className="clickable" alt="movieid" />
                </Link>
            ) : (
                <img src={image} loading="lazy" alt="movieid" />  // Removed the duplicate `loading="lazy"`
            )}
        </StyledMovieThumb>
    );
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default MovieThumb;
