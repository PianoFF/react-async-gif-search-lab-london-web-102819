import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    state = {
        gifs: []
    }
    render(){
        const { gifs } = this.state;
        return(
            <div>
                <GifSearch />
                {gifs.map(gif => <GifList gif={gif}/>)}
            </div>
        )
    }    

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=yZwBn73j8rILFwsEzUQSFj35p8zLI64j&rating=g')
        .then(resp=>resp.json())
        .then(gifs => this.setState({gifs: gifs.data}))
    }
}

export default GifListContainer