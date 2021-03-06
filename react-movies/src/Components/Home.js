import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
import './Home.css';
const base_url = 'https://api.themoviedb.org/3';

const Home = () =>{
    return(
        <div className="home">
            <Banner url={`${base_url}/movie/now_playing`} />
            <MovieList title="Trending" url={`${base_url}/trending/movie/day`}/>
            <MovieList title="Upcoming" url={`${base_url}/movie/upcoming`}/>
            <MovieList title="Top Rated" url={`${base_url}/movie/top_rated?language=en-US`}/>
            <MovieList title="Popular" url={`${base_url}/movie/popular`}/>
        </div>
    );
}

export default Home;