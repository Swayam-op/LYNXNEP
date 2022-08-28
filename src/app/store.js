import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/Movie/movieSlice';
import videoReducer from '../features/Video/videoSlice';
export default configureStore({
    reducer:{
        user:userReducer, 
        movie:movieReducer,
        video:videoReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),

});