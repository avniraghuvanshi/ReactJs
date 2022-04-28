import React,{useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import useTmdb from "../Api/useTmdb";
import tmdb from "../Api/tmdb";
import "./Details.css";

const img_base_url = 'https://image.tmdb.org/t/p/original';

const Details = () =>{
    const {movieId} = useParams()
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    const [details , setDetails] = useState(null);
    useEffect(()=>{
        const selectedMovie = async () =>{
            const res = await tmdb.get(detailsUrl);
            setDetails(res.data);
            return res;
        }
        selectedMovie();
    },[detailsUrl]);

    console.log(details?.title);
    return(
        <section className="banner-container">
            <img src={`${img_base_url}${details?.backdrop_path}`}></img>
        </section>
    );
}

export default Details;