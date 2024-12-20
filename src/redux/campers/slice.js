import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations";

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;
