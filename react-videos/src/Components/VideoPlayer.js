import React from "react";

const VideoPlayer = ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    }
    else{
        const vidUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        return(
            <div className="ui grif">
                <div className="ui embed column">
                    <iframe src={vidUrl} title="YouTube video player" ></iframe>
                </div>
                <div className="content column">
                    <h1 className="header">{video.snippet.channelTitle}</h1>
                    <p className="description">{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;