import {apiService} from "./apiService";
import {urls} from "../configs";

const genresService = {
    getAllGenres: () => apiService.get(urls.genres)
}
export {
    genresService
}