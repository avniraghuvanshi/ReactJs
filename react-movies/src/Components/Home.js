import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
const base_url = 'https://api.themoviedb.org/3';

const Home = () =>{
    return(
        <div>
            <Banner url={`${base_url}/movie/now_playing`} />
            <MovieList title="Top Rated" url={`${base_url}/movie/top_rated?language=en-US`}/>
            <MovieList title="Popular" url={`${base_url}/movie/popular`}/>
            <MovieList title="Upcoming" url={`${base_url}/movie/upcoming`}/>
        </div>
    );
}

export default Home;