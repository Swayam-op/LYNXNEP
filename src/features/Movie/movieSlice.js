import { createSlice } from "@reduxjs/toolkit";


const initialState={
    recommend:null,
    newDisney:null,
    original:null,
    trending:null,
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,target)=>{
            state.recommend=target.payload.recommend;
            state.newDisney=target.payload.newDisney;
            state.original=target.payload.original;
            state.trending=target.payload.trending;
        },
    }
})

export const {setMovies}=movieSlice.actions;

export const selectRecommend=(state)=> state.movie.recommend;
export const selectNewDisney=(state)=> state.movie.newDisney;
export const selectOriginal=(state)=> state.movie.original;
export const selectTrending=(state)=> state.movie.trending;

export default movieSlice.reducer;