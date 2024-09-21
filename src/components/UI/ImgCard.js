import React, { Children } from 'react';

function Banner({ imgUrl, alt, height, width, children, ...props }) {
    return (
        <div style={{ height: height, width: width }}
            className='overflow-hidden relative -z-10'>
            <img src={imgUrl} alt={alt}
                className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            {children}
        </div>
    );
}

export default ImgBackground;