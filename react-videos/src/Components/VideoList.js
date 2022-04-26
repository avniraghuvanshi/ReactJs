import React from "react";
import VideoCard from './VideoCard';

const VideoList = (props) =>{
    const video = props.videoItems.map( video =>{
        return <VideoCard key={video.id.videoId} video={video} onVideoSelection={props.onVideoSelection}/>;
    });

    return(
        <div className="ui divided items">
            {video}
        </div>
    );
}

export default VideoList;