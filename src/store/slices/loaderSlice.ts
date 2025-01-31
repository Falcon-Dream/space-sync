import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}
const initialState: LoaderState = { isLoading: true };

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
    toggleLoader(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { showLoader, hideLoader, toggleLoader } = loaderSlice.actions;
export default loaderSlice.reducer;