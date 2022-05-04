import {useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";
import tmdb from "./tmdb";

const useTmdb = (url) =>{
    const navigate = useNavigate();
    const [movies , setMovies] = useState([]);

    useEffect(()=>{
        const getMovies = async () =>{
            const response = await tmdb.get(url);
            setMovies(response.data.results);
            return response;
        }
        getMovies();
    }, [url]);

    return movies;
}

export default useTmdb;
