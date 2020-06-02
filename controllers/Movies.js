const axios = require('axios');

module.exports = {
    getMovies: () => {
        let movies = axios.get('https://yts.mx/api/v2/list_movies.json')
            .then((response) => {
                // handle success
                let data = response.data.data.movies;
                return data;
            }).catch((error) => {
                // handle error
                console.log(error);
            });
        return movies;
    }
};