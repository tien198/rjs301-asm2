import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const { bgColor, nav } = useScrollDown()
    return (
        <nav ref={nav} className={`flex justify-between px-4 py-5 fixed w-full text-white duration-500 ${bgColor}`}>
            <Link to='/'>
                <h1 className='font-semibold text-xl text-main'>Movie App</h1>
            </Link>
            <Link to='/search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
        </nav>
    );
}

export default Navbar;

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