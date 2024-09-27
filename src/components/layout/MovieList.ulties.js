import { generateImgUrl_Origin, generateImgUrl_W500 } from '../../ulti/http';

export function loadImg(imgRef, imgRectY, poster_path, setImgSrc, setBlurClass, event) {
    if (window.scrollY >= imgRectY - (document.documentElement.clientHeight)) {
        setImgSrc(generateImgUrl_Origin(poster_path))

        imgRef.current.addEventListener('load', e => {
            setBlurClass('')
        })
        event && window.removeEventListener('scroll', event)
    }
}