export function Container({ children, className = '' }) {
    return (
        <div className={`mx-3 md:mx-10 overflow-auto ${className}`}>
            {children}
        </div>
    );
}

export function Iframe({ width = 560, height = 315, src }) {
    return <iframe width={width} height={height} src={src}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
    </iframe>
}
