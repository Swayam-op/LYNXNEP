import { createSlice } from "@reduxjs/toolkit";

const initialState={
    videoLink:null,
}

const videoSlice=createSlice({
    name:'video',
    initialState,
    reducers:{
        setCurrentVideo: (state,action)=>{
            state.videoLink=action.payload.videoLink;
        },
        setCurrentVideoNull:(state)=>{
            state.videoLink=null;
        }
    }
});

export const {setCurrentVideo,setCurrentVideoNull} = videoSlice.actions;
export const selectVideo = (state)=> state.video.videoLink;
export default videoSlice.reducer;