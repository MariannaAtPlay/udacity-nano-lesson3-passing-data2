import React, { Component } from 'react';
import MovieStats from './MovieStats';

class ListMovies extends Component {
    render() {
        const movies = this.props.movies;
        return (
            <div>
                {Object.keys(movies).map(id => {
                    return <MovieStats movie={movies[id]}/>;
                })}
            </div>
        );
    }
}

export default ListMovies;