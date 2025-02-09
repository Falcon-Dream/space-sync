import { createSlice } from "@reduxjs/toolkit";

interface OverlayState {
    isShow: boolean;
}
const initialState: OverlayState = { isShow: false };

const overlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers: {
        showOverlay(state) {
            state.isShow = true;
        },
        hideOverlay(state) {
            state.isShow = false;
        },
        toggleOverlay(state) {
            state.isShow = !state.isShow;
        },
    },
});

export const { showOverlay, hideOverlay, toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;