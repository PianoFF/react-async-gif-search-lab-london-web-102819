import React from 'react'

const GifSearch = ({searchTerm, handleFormInput, onSearchSubmit}) => {

    return(
        <div>
            <form 
                name='gif search' 
                onChange={(e) => handleFormInput(e.target.value)}
                onSubmit={onSearchSubmit}
            >
                <input type='text' placeholder='Search' value={searchTerm}/>
                <input type='submit' value='Find Gif' style={{color: 'white', backgroundColor: 'orange'}}/> 
            </form>
        </div>
    )
}

export default GifSearch 