import React, { useContext } from 'react';
import MovieList from './MovieList';
import { useFetchMovieListWithContext } from '../../hooks/useFetchMovieList';
import { MovieListContext, MovieListProvider } from '../../store/movies-list-context';

// Prop drilling { title, fetchFn } ------- from <MovieCategory /> to <MovieListConsumer/>
export function MovieCategory({ title, fetchFn }) {
    return (
        <MovieListProvider>
            <MovieListConsumer title={title} fetchFn={fetchFn} />
        </MovieListProvider>
    );
}

function MovieListConsumer({ title, fetchFn }) {
    const { list } = useFetchMovieListWithContext(fetchFn, useContext(MovieListContext))
    return (
        <MovieList category={title} list={list} landScape={true} />
    )
}