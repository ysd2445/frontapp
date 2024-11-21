// userSlice.js
import { createSlice } from '@reduxjs/toolkit';



const movieSlice = createSlice({
  name: 'movies',
  initialState:{
    nowPlaying:[],
    popular:[],
    toprated:[],
    upComing:[],
    open:false,
    trailer:null
    
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      
    },
    setnowPlayingMovie(state, action) {
        state.nowPlaying = action.payload;
        
      },
      setPopularMovie(state, action) {
        state.popular = action.payload;
        
      },
      setTopRated(state, action) {
        state.toprated = action.payload;
        
      },
      setUpComingMovie(state, action) {
        state.upComing= action.payload;
        
      },
      setOpen:(state,action)=>{
        state.open = action.payload;
    },
    setTrailer:(state,action)=>{
      state.trailer=action.payload
    }
  
  },
});

export const { setTrailer,setUser , setPopularMovie, setTopRated,setUpComingMovie,setnowPlayingMovie ,setOpen} = movieSlice.actions;
export default movieSlice.reducer;
