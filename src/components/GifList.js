import React from 'react'

const GifList = ({gif}) => {
    return(
        <li>
            <img src={gif.images.original.url}/>
        </li>
    )
}

export default GifList 