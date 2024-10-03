import React, { useContext, useEffect, useRef, useState } from 'react';
import { useScrollToLoadImg } from './hooks/useScrollToLoadImg';
import { MovieListContext } from '../../store/movies-list-context';
import { generateYoutubeUrl } from '../../ulti/http';
import Iframe from '../UI/Iframe';


export default function MovieList({ list, category, landScape = true, movieDetail = true }) {

    return (
        <div className={`w-full bg-main text-white pt-10 `}>
            {category && <h4 className='font-semibold text-2xl mb-6 mx-7'>{category}</h4>}
            <div className='px-10 pb-16 overflow-y-auto '>
                <div className='flex gap-4 w-max'>
                    {
                        list.map((i, index) => {
                            return <MoviePoster movie={i} isLandscape={landScape} key={i.id} index={index} />
                        })
                    }
                </div>
            </div>
            {movieDetail && <MovieDetail />}
        </div>
    );
}

function MoviePoster({ movie, isLandscape, index }) {
    const imgSizeClass = isLandscape ?
        'h-36 w-72 object-cover' :
        'h-64 w-44 object-cover'
    const { name = '', title = '', poster_path = '' } = movie

    const { imgRef, imgSrc, blurClass } = useScrollToLoadImg(poster_path)

    const { activeItemIndex,
        detailHeight,
        setActiveItemIndex,
        revealDetail,
        hideDetail
    } = useContext(MovieListContext)


    function handleActiveItemIndex(index) {
        if (index === activeItemIndex && detailHeight !== '0px') {
            hideDetail()
        } else {
            revealDetail()
            setActiveItemIndex(index)
        }
    }

    return (
        <img ref={imgRef} src={imgSrc} alt={name || title}
            className={`hover:scale-110 duration-150 ` + imgSizeClass + blurClass}
            onClick={e => handleActiveItemIndex(index)} />
    )
}

function MovieDetail() {
    const { list, activeItemIndex: i, detailHeight } = useContext(MovieListContext)
    const [youtubeSrc, setYoutubeSrc] = useState('')
    const movie = list[i] || {}
    useEffect(() => {
        const { id = '' } = movie
        async function createYoutubeUrl(id) {
            const url = await generateYoutubeUrl(id)
            setYoutubeSrc(url)
        }
        createYoutubeUrl(id)

    }, [movie])

    return (
        <div className={`h-auto w-full duration-500 overflow-auto grid grid-cols-1 md:grid-cols-2 gap-7`} style={{ height: detailHeight }}>
            <DetailContents movie={movie} />
            <div className='md:my-4 mx-4'>
                <Iframe src={youtubeSrc} width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}

function DetailContents({ movie }) {
    const { name = '', title = '', release_date = '', vote_average = '', overview = '' } = movie

    return (
        <div className='mx-10 my-6 flex flex-col gap-5'>
            <h5 className='font-semibold text-3xl '>{name || title || 'no name'}</h5>
            <div className='p-px bg-white' />
            <div>
                <div className='font-semibold'>Release Date{release_date}</div>
                <div className='font-semibold'>Vote{vote_average}</div>
            </div>
            <p>{overview}</p>
        </div>
    )
}