import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movieDetails: {}
}

const getMovieByID = createAsyncThunk(
    'movieDetailsSlice/getMovieByID',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getMovieByID(id)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    })

const movieDetailsSlice = createSlice({
    name: 'movieDetailsSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getMovieByID.fulfilled, (state, action)=>{
            state.movieDetails = action.payload
        })
})

const {reducer: movieDetailsReducer} = movieDetailsSlice

const movieDetailActions = {
    getMovieByID
}

export {
    movieDetailsReducer,
    movieDetailActions
}