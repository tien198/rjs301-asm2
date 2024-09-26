import React from 'react';
import MovieList from './MovieList';
import { useFetchMovieList } from '../../hooks/useFetchMovieList';
import { getActionMoviesList, getComedyMoviesList, getDocumentariesList, getHorrorMoviesList, getRomanceMoviesList, getTopRatedList, getTrendingList } from '../../ulti/http';

export function TrendingCategory() {
    const { list } = useFetchMovieList(getTrendingList)
    return (
        <MovieList category='Xu hướng' list={list} landScape={true} />
    );
}

export function TopRatedCategory() {
    const { list } = useFetchMovieList(getTopRatedList)
    return (
        <MovieList category='Xếp hạng cao' list={list} landScape={true} />
    );
}

export function ActionMoviesCategory() {
    const { list } = useFetchMovieList(getActionMoviesList)
    return (
        <MovieList category='Hành Động' list={list} landScape={true} />
    );
}

export function ComedyMoviesCategory() {
    const { list } = useFetchMovieList(getComedyMoviesList)
    return (
        <MovieList category='Hài' list={list} landScape={true} />
    );
}
export function HorrorMoviesCategory() {
    const { list } = useFetchMovieList(getHorrorMoviesList)
    return (
        <MovieList category='Kinh dị' list={list} landScape={true} />
    );
}
export function RomanceMoviesCategory() {
    const { list } = useFetchMovieList(getRomanceMoviesList)
    return (
        <MovieList category='Lãng mạn' list={list} landScape={true} />
    );
}
export function DocumentariesCategory() {
    const { list } = useFetchMovieList(getDocumentariesList)
    return (
        <MovieList category='Tài liệu' list={list} landScape={true} />
    );
}