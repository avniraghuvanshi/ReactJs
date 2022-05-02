import React,{useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import tmdb from "../Api/tmdb";
import "./Details.css";

const img_base_url = 'https://image.tmdb.org/t/p/original';

const Details = () =>{
    const {movieId} = useParams()
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    const [details , setDetails] = useState('');
    useEffect(()=>{
        const selectedMovie = async () =>{
            const res = await tmdb.get(detailsUrl);
            setDetails(res.data);
            return res;
        }
        selectedMovie();
    },[detailsUrl]);

    return(
        <section className="details">
            <div className="details-backdrop">
                <img src={`${img_base_url}${details?.backdrop_path}`}></img>
            </div>
            <div className="details-content">
                <div className="dc-upper">
                    <img src={`${img_base_url}${details.poster_path}`}></img>
                    <div id="d-title">
                        <h1>{details.title}</h1>
                        <span>{details.vote_average}</span>
                    </div>
                </div>
                <p id="overview">{details.overview}</p>
            </div>
        </section>
    );
}

export default Details;