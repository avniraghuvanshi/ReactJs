import React from "react";
import { NavLink } from "react-router-dom";
import useTmdb from "../Api/useTmdb";
import './MovieList.css';

const img_base_url = 'https://image.tmdb.org/t/p/original';
const MovieList = ({title , url}) =>{
    const movies = useTmdb(url);
    const renderedMovie = movies.map(movie =>{
        return(
            <NavLink to={`details`} className="poster-container">
                <img src={`${img_base_url}${movie.poster_path}`}></img>
            </NavLink>
        );
    });
    return(
        <div className="row-container">
            <h1>{title}</h1>
            <div className="scroll">{renderedMovie}</div>
        </div>
    );
}

export default MovieList;