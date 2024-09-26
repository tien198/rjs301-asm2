import React from 'react';
import { Link } from 'react-router-dom';
import { generateImgUrl_Origin } from '../../ulti/http';

export default function MovieList({ list, category, landScape = true }) {
    const imgSizeClass = landScape ?
        'h-36 w-72 object-cover' :
        'h-64 w-44 object-cover'

    return (
        // <div className='w-full bg-main text-white overflow-y-auto '>
        <div className='w-full bg-main text-white px-10 pt-10 pb-16 overflow-clip'>
            {category && <h4 className='font-semibold text-2xl -mx-5 mb-6'>{category}</h4>}
            <div className='flex gap-4 w-max'>
                {
                    list.map(i => {
                        return <MovieItem movie={i} sizeClassName={imgSizeClass} key={i.id} />
                    })
                }
            </div>
        </div>
    );
}

function MovieItem({ movie, sizeClassName }) {
    const { id = '', name = '', poster_path = '' } = movie
    const imgSrc = generateImgUrl_Origin(poster_path)
    return (
        <Link to={`/`}>
            <img src={imgSrc} alt={name} className={sizeClassName} />
        </Link>
    )
}