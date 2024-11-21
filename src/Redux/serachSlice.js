// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  search: [], // you might store user data here if needed
   // you might store a JWT or other token here
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchMovie(state, action) {
      state.search = action.payload;
      
    },
  
  },
});

export const { setSearchMovie } = searchSlice.actions;
export default searchSlice.reducer;
