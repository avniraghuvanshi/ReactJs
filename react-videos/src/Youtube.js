import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        key: 'AIzaSyAJNFXQ41BK82yK5ITooYXcPASjnMxBd0I',
        maxResults: 20,
    }    
});