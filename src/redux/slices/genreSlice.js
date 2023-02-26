import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services/genresService";

const initialState={
    genres:[]
};

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await genresService.getAllGenres()
            return data.genres
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, action)=>{
            state.genres = action.payload
        })
})

const{ reducer:genresReducer}=genreSlice

const genresAction = {
getAllGenres
}

export {
    genresReducer,
    genresAction
}