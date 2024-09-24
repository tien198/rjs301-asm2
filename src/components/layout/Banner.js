import React from 'react';

// css
import styles from './Banner.module.css'

export default function Banner({ imgSrc, title, description }) {
    // if (!imgSrc) imgSrc = ''
    // if (!title) title = ''
    // if (!description) description = ''
    return (
        <ImgBackground imgUrl={imgSrc} alt={title} >
            <BannerContents title={title} description={description} />
        </ImgBackground>
    );
}

function ImgBackground({ imgUrl, alt, children, ...props }) {
    return (
        <div>
            <img src={imgUrl} alt={alt}
                className='w-full h-full absolute -z-50 object-cover' />
            <div className={styles['banner']}>
                {children}
            </div>
        </div>
    );
}

function BannerContents({ title, description }) {
    return (
        <>
            <div className='px-6 py-12'>
                <h3 className='font-extrabold text-3xl pb-7'>{title}</h3>
                <div className='flex gap-4 pb-2'>
                    <BannerButton>Play</BannerButton>
                    <BannerButton>My List</BannerButton>
                </div>
                <p className='max-w-96 text-sm font-semibold leading-4'>{description}</p>
            </div>
        </>
    )
}

function BannerButton({ children }) {
    return (
        <button className='rounded bg-zinc-900 opacity-80 font-semibold px-7 py-1'>
            {children}
        </button>
    )
}

// function useFetchBanner() {
//     const [imgSrc, setImgSrc] = useState('')
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     function setBanner(imgSrc, title, description) {
//         setImgSrc(imgSrc)
//         setTitle(title)
//         if (description.length > 130)
//             setDescription(description.slice(0, 130) + ' ...')
//         else
//             setDescription(description)
//     }
//     useEffect(() => {
//         async function createBanner() {
//             const movieBanner = await getBanner()
//             const { backdrop_path: imgPath,
//                 name: title,
//                 overview: description } = movieBanner
//             const imgUrl = generateImgUrl_Origin(imgPath)

//             bannerInfo.init(imgUrl, title, description)

//             console.log(bannerInfo);

//             setBanner(imgUrl, title, description)
//         }
//         createBanner()

//     }, [])

//     return {
//         imgSrc,
//         title,
//         description
//     }
// }