import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genresReducer} from "./slices/genreSlice";
import {movieDetailsReducer} from "./slices/movieDetailsSlice";

let rootReducer = combineReducers(
    {
        movies: movieReducer,
        genres:genresReducer,
        movieDetails:movieDetailsReducer,
    }
);

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}