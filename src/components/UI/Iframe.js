import React from 'react';

function Iframe({ width = 560, height = 315, src }) {
    return <iframe width={width} height={height} src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}

export default Iframe;