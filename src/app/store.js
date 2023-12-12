import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/Movie/movieSlice';
import videoReducer from '../features/Video/videoSlice';
import animeReducer from "../features/Anime/animeSlice";
export default configureStore({
    reducer:{
        user:userReducer, 
        movie:movieReducer,
        video:videoReducer,
        anime:animeReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),

});