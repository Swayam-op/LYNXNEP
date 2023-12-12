import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const AnimeSlice = createSlice({
    name : "anime-slice",
    initialState,
    reducers : {
        setAnimes : (state, target)=>{

            return target.payload.animes;

        }
    }
})

export const {setAnimes} = AnimeSlice.actions;
export const selectAnimes = (state)=>state.anime;

export default AnimeSlice.reducer;