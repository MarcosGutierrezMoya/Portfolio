import React from 'react'

type videos = {
    url:string;
    gameName:string;
}

const Videos = ({url,gameName}:videos) => {
    
    return (
        <iframe width="800" height="400" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}

export default Videos