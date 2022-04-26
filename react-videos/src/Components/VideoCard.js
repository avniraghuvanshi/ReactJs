import React from "react";

const VideoCard = (props) =>{
    return(
        <div onClick={()=>{props.onVideoSelection(props.video)}} className="item">
            <div className="image">
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.channelTitle}></img>
            </div>
            <div className="content">
                <p className="header">{props.video.snippet.title}</p>
                <div className="meta">
                    <p>{props.video.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;