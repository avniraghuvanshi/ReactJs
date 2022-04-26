import React from "react";
import Youtube from "../Youtube";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component{
    state = {videoItems: [] , selection: null};
    
    fetchVideo = async (input) => {
        const response = await Youtube.get('search', {
            params: {
                q: input
            }
        });
        console.log(response.data.items);
        this.setState({
            videoItems: response.data.items,
            selection: response.data.items[0]
        });
    }
    selectedVideo = (video) =>{
        this.setState({selection: video});
    }
    componentDidMount(){
        this.fetchVideo('bus');
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar fetchVideo={this.fetchVideo}/>
                <div className="ui grid">
                    <div className= "ten wide column">
                        <VideoPlayer video={this.state.selection}/>
                    </div>
                    <div className="six wide column">    
                        <VideoList videoItems={this.state.videoItems} onVideoSelection={this.selectedVideo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;