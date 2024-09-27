import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateImgUrl_Origin, generateImgUrl_W500 } from '../../ulti/http';

export default function MovieList({ list, category, landScape = true }) {

    return (
        // <div className='w-full bg-main text-white overflow-y-auto '>
        <div className='w-full bg-main text-white px-10 pt-10 pb-16 overflow-clip'>
            {category && <h4 className='font-semibold text-2xl -mx-5 mb-6'>{category}</h4>}
            <div className='flex gap-4 w-max'>
                {
                    list.map(i => {
                        return <MovieItem movie={i} isLandscape={landScape} key={i.id} />
                    })
                }
            </div>
        </div>
    );
}

function MovieItem({ movie, isLandscape }) {
    const imgSizeClass = isLandscape ?
        'h-36 w-72 object-cover' :
        'h-64 w-44 object-cover'
    const { id = '', name = '', poster_path = '' } = movie
    const imgSrcInitVal = isLandscape ?
        generateImgUrl_W500(poster_path) :
        generateImgUrl_Origin(poster_path)
    const blurClassInit = isLandscape ? ' blur' : ''
    const [imgSrc, setImgSrc] = useState(imgSrcInitVal)
    const [blurClass, setBlurClass] = useState(blurClassInit)

    const imgRef = useRef()
    useEffect(() => {
        const imgRectY = imgRef.current.getBoundingClientRect().top
        function event(e) {
            if (window.scrollY >= imgRectY - (document.documentElement.clientHeight)) {
                setImgSrc(generateImgUrl_Origin(poster_path))
                window.removeEventListener('scroll', event)
            }
        }
        window.addEventListener('scroll', event)
    }, [])

    useEffect(() => {
        function loaded(e) {
            setBlurClass('')
        }
        imgRef.current.addEventListener('load', loaded)
    }, [])
    return (
        <Link to={`/`}>
            <img ref={imgRef} src={imgSrc} alt={name} className={imgSizeClass + blurClass} />
        </Link>
    )
}