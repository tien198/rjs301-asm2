import { useState, useRef, useEffect } from 'react'
import { generateImgUrl_Origin, generateImgUrl_W500 } from '../../../ulti/http';


export function useScrollToLoadImg(poster_path) {
    const imgRef = useRef()
    const [imgSrc, setImgSrc] = useState(generateImgUrl_W500(poster_path))
    const [blurClass, setBlurClass] = useState(' blur')

    useEffect(() => {
        const imgRectY = imgRef.current.getBoundingClientRect().top

        isIntersect() && loadImg()
        window.addEventListener('scroll', event)


        // functions
        function event(e) {
            isIntersect() && loadImg(event)
        }
        function isIntersect() {
            if (window.scrollY >= imgRectY - (document.documentElement.clientHeight))
                return true
            return false
        }
        // pass event func reference to loadImg() to removeEventListener
        function loadImg(event) {
            setImgSrc(generateImgUrl_Origin(poster_path))

            imgRef.current.addEventListener('load', e => {
                setBlurClass('')
            })

            event && window.removeEventListener('scroll', event)
        }
    }, [])

    return {
        imgRef, imgSrc, blurClass
    }
}