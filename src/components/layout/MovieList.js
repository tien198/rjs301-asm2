import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollToLoadImg } from './hooks/useScrollToLoadImg';
import { MovieListContext, MovieListProvider } from '../../store/movies-list-context';


export default function MovieList({ list, category, landScape = true, movieDetail = true }) {

    return (
        <div className={`w-full bg-main text-white pt-10 `}>
            {category && <h4 className='font-semibold text-2xl mb-6 px-10'>{category}</h4>}
            <div className='px-10 pb-16 overflow-y-auto '>
                <div className='flex gap-4 w-max'>
                    {
                        list.map(i => {
                            return <MoviePoster movie={i} isLandscape={landScape} key={i.id} />
                        })
                    }
                </div>
            </div>
            {
                movieDetail && <MovieDetail />
            }
        </div>
    );
}

function MoviePoster({ movie, isLandscape }) {
    const imgSizeClass = isLandscape ?
        'h-36 w-72 object-cover' :
        'h-64 w-44 object-cover'
    const { id = '', name = '', poster_path = '' } = movie
    const { imgRef, imgSrc, blurClass } = useScrollToLoadImg(poster_path)

    return (
        <Link to={`/`}>
            <img ref={imgRef} src={imgSrc} alt={name} className={`hover:scale-110 duration-150 ` + imgSizeClass + blurClass} />
        </Link>
    )
}

function MovieDetail() {
    const [height, setHeight] = useState('0px')
    const { list, activeItemIndex: i } = useContext(MovieListContext)
    const movie = list[i]
    console.log(movie);

    return (
        <div className={`${height} w-full px-10 pb-16`}>

        </div>
    )
}