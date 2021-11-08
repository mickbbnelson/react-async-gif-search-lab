import React from 'react'

export default class GifSearch extends React.Component {
   
    state = {
        search: ""
    }
    
    render() {
        return(<div>
                <form>
                    <label>Search a Gif:</label>
                    <input type="text" name="gif" value={this.state.search}></input>
                </form>
            </div>)
            
    }
}