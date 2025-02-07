import { createSlice } from "@reduxjs/toolkit";

interface SurveyState {
  isShow: boolean;
}
const initialState: SurveyState = { isShow: true };

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    showSurvey(state) {
      state.isShow = true;
    },
    hideSurvey(state) {
      state.isShow = false;
    },
    toggleSurvey(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const { showSurvey, hideSurvey, toggleSurvey } = surveySlice.actions;
export default surveySlice.reducer;
