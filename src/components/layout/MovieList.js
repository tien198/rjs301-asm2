import React from 'react';
import { Link } from 'react-router-dom';
import { generateImgUrl_Origin } from '../../ulti/http';

export default function MovieList({ list }) {
    return (
        <div className='bg-main text-white px-6 pt-4 pb-10'>

        </div>
    );
}

function MovieItem({ movie, landScape = true }) {
    const { id, name, poster_path } = movie
    const imgSrc = generateImgUrl_Origin(poster_path)
    return (
        <Link to='/'>
            <img src={imgSrc} alt={name} />
        </Link>
    )
}