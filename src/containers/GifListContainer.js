import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchTerm: "dolphin"
    }
    
    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=nZcf0rQNHPr1h4BTJGxCBaZFEQvILUZD&rating=g/?_limit=3`) 
        .then(r => r.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        }
        )
    }

    changeSearch = (term) => {
       console.log(this) 
       this.setState({
           searchTerm: term
       })
    }

    componentDidUpdate() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=nZcf0rQNHPr1h4BTJGxCBaZFEQvILUZD&rating=g/?_limit=3`) 
        .then(r => r.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        }
        )
    }

    //componentDidUpdate(term) {
    //    fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=nZcf0rQNHPr1h4BTJGxCBaZFEQvILUZD&rating=g/?_limit=3`) 
    //    .then(r => r.json())
    //    .then(data => {
    //        this.setState({
    //            gifs: data.data
    //        })
    //    }
    //    )
    //}
    
    render() {
        return <div>
            <h2><GifSearch searchSubmit={this.changeSearch}/></h2>
            <div><GifList gifs={this.state.gifs} /></div>
            </div> 
    }
}