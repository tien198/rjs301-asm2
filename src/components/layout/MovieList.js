import React, { useContext, useEffect, useRef, useState } from 'react';
import { useScrollToLoadImg } from './hooks/useScrollToLoadImg';
import { MovieListContext } from '../../store/movies-list-context';


export default function MovieList({ list, category, landScape = true, movieDetail = true }) {
    const { activeItemIndex,
        detailHeight,
        setActiveItemIndex,
        revealDetail,
        hideDetail
    } = useContext(MovieListContext)
    function handleActiveItemIndex(index) {
        console.log('index:', index, 'activeItemIndex:', activeItemIndex);

        if (index === activeItemIndex && detailHeight !== '0px') {
            hideDetail()
        } else {
            revealDetail()
            setActiveItemIndex(index)
        }
    }
    return (
        <div className={`w-full bg-main text-white pt-10 `}>
            {category && <h4 className='font-semibold text-2xl mb-6 px-10'>{category}</h4>}
            <div className='px-10 pb-16 overflow-y-auto '>
                <div className='flex gap-4 w-max'>
                    {
                        list.map((i, index) => {
                            return <MoviePoster movie={i} isLandscape={landScape} key={i.id} onClick={e => handleActiveItemIndex(index)} />
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

function MoviePoster({ movie, isLandscape, onClick }) {
    const imgSizeClass = isLandscape ?
        'h-36 w-72 object-cover' :
        'h-64 w-44 object-cover'
    const { id = '', name = '', poster_path = '' } = movie
    const { imgRef, imgSrc, blurClass } = useScrollToLoadImg(poster_path)

    return (
        <img ref={imgRef} src={imgSrc} alt={name} className={`hover:scale-110 duration-150 ` + imgSizeClass + blurClass}
            onClick={onClick} />
    )
}

function MovieDetail() {
    const divRef = useRef()
    const { list, activeItemIndex: i, detailHeight } = useContext(MovieListContext)
    const movie = list[i]
    useEffect(() => {
        divRef.current.style.height = detailHeight
    }, [detailHeight])
    return (
        <div ref={divRef} className={` w-full bg-white duration-1000 overflow-hidden`}>
            <p className='text-7xl text-red-900'>Detail {i}</p>
        </div>
    )
}