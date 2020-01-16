import React from 'react'

const GifList = ({gif}) => {
    return(
        <div>
            <ul name='gif list'>
                <li>
                    <img src={gif.images.original.url}/>
                </li>
            </ul>
        </div>
    )
}

export default GifList 