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

    const [imgSrc, setImgSrc] = useState(generateImgUrl_W500(poster_path))
    const [blurClass, setBlurClass] = useState(isLandscape ? ' blur' : '')

    const imgRef = useRef()
    useEffect(() => {
        const imgRectY = imgRef.current.getBoundingClientRect().top

        if (window.scrollY >= imgRectY - (document.documentElement.clientHeight)) {
            setImgSrc(generateImgUrl_Origin(poster_path))

            imgRef.current.addEventListener('load', e => {
                setBlurClass('')
            })
        }

        window.addEventListener('scroll', event)
        function event(e) {
            if (window.scrollY >= imgRectY - (document.documentElement.clientHeight)) {
                setImgSrc(generateImgUrl_Origin(poster_path))

                imgRef.current.addEventListener('load', e => {
                    setBlurClass('')
                })

                window.removeEventListener('scroll', event)
            }
        }
    }, [])

    return (
        <Link to={`/`}>
            <img ref={imgRef} src={imgSrc} alt={name} className={imgSizeClass + blurClass} />
        </Link>
    )
}