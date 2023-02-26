import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movieService";

let initialState = {
    movies: [],
    prev: null,
    next: null
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({with_genres, page}, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getAllMovies(with_genres, page)
            return data.results
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({query, page}, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.searchMovie(query, page)
            return data.results
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
})

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAllMovies,
    searchMovie,
}

export {
    movieReducer,
    movieActions
}