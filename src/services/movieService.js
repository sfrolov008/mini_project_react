import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAllMovies:(with_genres='', page = '1') => apiService.get(urls.movies, {params:{with_genres, page}}),
    getMovieByID:(id) => apiService.get(`${urls.movie}/${id}`),
    searchMovie:(query = '', page = '1') => apiService.get(urls.search, {params:{query, page}}),
    getVideo:(id) => apiService.get(`${urls.movie}/${id}${urls.videos}`)
}

export {
    moviesService
}