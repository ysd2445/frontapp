// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  user: null, // you might store user data here if needed
   // you might store a JWT or other token here
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      
    },
  
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
