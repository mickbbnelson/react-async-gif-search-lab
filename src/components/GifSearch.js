import React from 'react'

export default class GifSearch extends React.Component {
    
    state = {
        searchTerm: ""
    }

    handleSearchChange = (event) => {
        this.setState({
          searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let term = this.state.searchTerm
        console.log(term)
        this.props.searchSubmit(term)
    }
    //sSearch() {
    //    this.props.searchSubmit(this.state.searchTerm)
    //}
    
    render() {
        return(         //Figure out how to utilize this callback funtion
        <div>
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>Search a Gif:</label>
                <input type="text" name="gif" onChange={event => this.handleSearchChange(event)} value={this.state.searchTerm}></input>
                <button type="submit">Search</button>
            </form>
        </div>  
        )}
}