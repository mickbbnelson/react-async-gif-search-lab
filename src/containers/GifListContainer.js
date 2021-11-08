import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }
    
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=nZcf0rQNHPr1h4BTJGxCBaZFEQvILUZD&rating=g/?_limit=3') 
        .then(r => r.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        }
        )
    }

    //handleSubmit = () => {
    //
    //}
    
    render() {
        return <div>
            <h2><GifSearch /></h2>
            <p><GifList gifs={this.state.gifs} /></p>
            </div> 
    }
}