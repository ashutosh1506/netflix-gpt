import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.isLoading = false;
    },
    setGptLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, setGptLoading } =
  gptSlice.actions;
export default gptSlice.reducer;
