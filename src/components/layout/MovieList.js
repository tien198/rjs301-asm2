import React from 'react';
import { Link } from 'react-router-dom';
import { generateImgUrl_Origin } from '../../ulti/http';

export default function MovieList({ list, landScape = true }) {
    const imgSizeClass = landScape ?
        'h-44 w-32' :
        'h-24 w-52 '

    return (
        <div className='w-full  overflow-y-auto'>
            <div className='bg-main text-white px-6 pt-8 pb-10 flex gap-4 w-max'>
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