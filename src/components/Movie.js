import React from 'react';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Navigation from './elements/Navigation';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId);
    //console.log('Movie Result:', movie);
    if (error) return <div>Something went wrong...</div>;
    if (loading) return <Spinner />;
    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar budget={movie.budget} revenue={movie.revenue} time={movie.runtime} />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </Grid>
        </>
    )
}
export default Movie;