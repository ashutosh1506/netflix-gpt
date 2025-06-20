import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
