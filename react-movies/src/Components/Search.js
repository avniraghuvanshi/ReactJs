import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation , useSearchParams } from "react-router-dom";
import useTmdb from "../Api/useTmdb";
import './Search.css';

const img_base_url = 'https://image.tmdb.org/t/p/original';
const Search = () =>{
    const [searchParam , setSearchParam] = useSearchParams();
    const {state} = useLocation();
    // searchParam.set('q',state);
    // setSearchParam(searchParam);
    const searchResult = useTmdb(`https://api.themoviedb.org/3/search/movie?query=${state}`);
    const filteredResult = searchResult.filter(result => result?.backdrop_path!==null).map(movie=>{
        return(
            <NavLink to={`/details/${movie?.id}`} className="sl-card" key={movie?.id}>
                <img src={movie?.poster_path ? `${img_base_url}${movie?.poster_path}` : ''} alt={movie?.id}></img>
                <div className="card-content">
                    <h1>{movie?.title}</h1>
                    <p><span className="material-symbols-outlined">star</span>{movie?.vote_average}</p>
                </div>
            </NavLink>
        );
    });
    
    return(
        <section className="search">
            <h2 id="query">Results for '{state}'...</h2>
            <div className="sl-card-container">
                {filteredResult.length>0 ? filteredResult : <p style={{color: "#f5cb5c" , fontSize:"3rem" , marginTop:"3rem"}}> ¯\_(ツ)_/¯ </p>}
            </div>
        </section>
    );
}

export default Search;