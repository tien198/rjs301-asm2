import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import magnifyingGlass from './icons/magnifyingGlass.svg'

export default function Navbar() {
    // internal custom hook (defined below in this file)
    const { bgColor, nav } = useScrollDown()
    return (
        <nav ref={nav} className={`flex justify-between px-4 py-5 fixed z-50 w-full text-white duration-500 ${bgColor}`}>
            <Link to='/'>
                <h1 className='font-bold text-xl text-main'>Movie App</h1>
            </Link>
            <Link to='/search'>
                <img src={magnifyingGlass} alt='magnifying-glass' className='w-6' />
            </Link>
        </nav>
    );
}

// this hook fire UI change when scroll down through Navbar
function useScrollDown() {
    const nav = useRef()
    const [bgColor, setBgColor] = useState('bg-transparent')
    useEffect(() => {
        const { height: navHeight } = nav.current.getBoundingClientRect()
        window.addEventListener('scroll', e => {
            if (window.scrollY >= navHeight) {
                setBgColor('bg-black')
            }
            else {
                setBgColor('bg-transparent')
            }
        })
    }, [])

    return {
        bgColor,
        nav
    }
}