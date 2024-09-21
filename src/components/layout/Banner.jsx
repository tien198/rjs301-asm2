import React, { useEffect, useState } from 'react';
import { generateImgUrl_Origin, getBanner } from '../../ulti/http';
import { Result } from '../../models/Response';

function Banner() {
    const [imgSrc, setImgSrc] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function setBanner(imgSrc, title, description) {
        setImgSrc(imgSrc)
        setTitle(title)
        setDescription(description)
    }
    useEffect(() => {
        async function createBanner() {
            const movieBanner = await getBanner()
            const { backdrop_path: imgPath,
                name: title,
                overview: description } = movieBanner
            const imgUrl = generateImgUrl_Origin(imgPath)

            setBanner(imgUrl, title, description)
        }
        createBanner()

    }, [])
    return (
        <ImgBackground imgUrl={imgSrc} alt={title} >
            <BannerContents title={title} description={description} />
        </ImgBackground>
    );
}

export default Banner;


function ImgBackground({ imgUrl, alt, children, ...props }) {
    return (
        <div className='overflow-hidden relative -z-10 text-white h-1/2vh'>
            <img src={imgUrl} alt={alt}
                className='h-full absolute top-1/2 left-1/2'
                style={{
                    transform: 'translate(-50%,-50%)'
                }} />
            {children}
        </div>
    );
}

function BannerContents({ title, description }) {
    return (
        <div className='absolute left-5 bottom-24'>
            {/* <h3 className='font-bold text-xl'>{title}</h3>
            <p>{description}</p> */}
        </div>
    )
}