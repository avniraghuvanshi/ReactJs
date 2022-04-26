import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchTerm: ""};
    }

    onInputChange = (e) =>{
        e.preventDefault();

        this.props.fetchVideo(this.state.searchTerm);
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onInputChange} className="ui large fluid icon input">
                <input type="text" onChange={e=>{this.setState({searchTerm: e.target.value})}} placeholder="Search for a video..."></input>
                <i className="search icon"></i>
                </form>
            </div>
        );
    }
}

export default SearchBar;