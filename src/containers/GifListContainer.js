import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    state = {
        gifs: [],
        searchTerm: ''
    }
    render(){
        const { gifs, searchTerm } = this.state;
        return(
            <div>
                <GifSearch searchTerm={searchTerm} handleFormInput={this.handleFormInput} onSearchSubmit={this.onSearchSubmit}/>
                <ul>
                {gifs.map(gif => <GifList gif={gif}/>)}
                </ul>
            </div>
        )
    }    

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=yZwBn73j8rILFwsEzUQSFj35p8zLI64j&rating=g')
        .then(resp=>resp.json())
        .then(gifs => this.setState({gifs: gifs.data}))
    }

    handleFormInput = (formData) => {
        this.setState({
            searchTerm: formData
        })
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=yZwBn73j8rILFwsEzUQSFj35p8zLI64j&rating=g`)
        .then(resp=>resp.json())
        .then(gifs => this.setState({gifs: gifs.data}))
        this.setState({
            searchTerm: ''
        })        
    }
}

export default GifListContainer