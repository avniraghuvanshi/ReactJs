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
    let revenue = details?.revenue ? details?.revenue.toLocaleString() : '';
    let reviews = details?.vote_count ? details?.vote_count.toLocaleString() : '';

    return(
        <section className="details">
            <div className="details-backdrop">
                <img alt={details?.id} src={`${img_base_url}${details?.backdrop_path}`}></img>
            </div>
            <div className="details-content">
                <div className="dc-upper">
                    <img alt={details?.id} src={`${img_base_url}${details?.poster_path}`}></img>
                    <div id="d-title">
                        <h1>{details?.title}</h1>
                        <p><span className="material-symbols-outlined">star</span>{details?.vote_average}</p>
                        {details?.genres ? <ul>
                            {details?.genres.map(genre=>{
                                return <li key={genre?.name}>{genre?.name}</li>
                            })}
                        </ul> : <span>-</span>}
                    </div>
                </div>
                <section id="overview">
                    <p>{details?.overview}</p>
                    <div className="extra-info">
                        <p><span className="material-symbols-outlined">paid</span>{revenue===""||revenue===null ? '-' : revenue }</p>
                        <p><span className="material-symbols-outlined">reviews</span>{reviews===""||reviews===null ? '-' : reviews} User Reviews</p>
                        <p><span className="material-symbols-outlined">calendar_month</span>{details?.release_date}</p>
                        <p id="status">{details?.status}</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Details;