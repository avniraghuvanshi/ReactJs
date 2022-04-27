import React,{useState , useEffect} from "react";
import useTmdb from "../Api/useTmdb";
import "./Banner.css";

const img_base_url = 'https://image.tmdb.org/t/p/original';
const Banner = ({url}) =>{
    const [bannerMovie , setBannerMovie] = useState('');
    const movies = useTmdb(url);
    useEffect(()=>{
        setBannerMovie(movies[Math.floor(Math.random()*movies.length)]);
    });
    //console.log(bannerMovie);
    return(
        <div className="banner-container">
            <img src={`${img_base_url}${bannerMovie?.backdrop_path}`}></img>
        </div>
    );
}

export default Banner;