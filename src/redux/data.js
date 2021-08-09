import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  playing: false,
  page: "start",
};

// Slice
const data = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Actions
export const { setPlaying, setPage } = data.actions;

// Selectors
export const selectPlaying = (state) => state.data.playing;
export const selectPage = (state) => state.data.page;

// Reducer
export default data.reducer;
