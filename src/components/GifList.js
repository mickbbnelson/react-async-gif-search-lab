// personalized api key: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=nZcf0rQNHPr1h4BTJGxCBaZFEQvILUZD&rating=g

import React from 'react'

export default class GifList extends React.Component {
   
    
    render() {
        return(<div>
            <ul>
                {this.props.gifs.map((gif, i) => <img key={i} src={gif.images.original.url} alt="mfingifs"/>)}
            </ul>
            </div>)
            
    }
}

//{this.props.fResults.map((gif, i) => <li>{i}: {console.log(gif)}</li>)}