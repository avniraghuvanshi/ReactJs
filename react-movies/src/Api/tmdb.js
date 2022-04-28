import axios from 'axios';
//const api_key = process.env.REACT_APP_TMDB_KEY;
const api_key = '3579b6329733155581c9f6023b49023e';
console.log(api_key);

export default axios.create({
    params:{
        api_key: api_key,
        adult: false,
        include_adult: false
    } 
});