import { createSlice } from "@reduxjs/toolkit";

interface SurveyState {
  isShow: boolean;
  step: string;
}
const initialState: SurveyState = { isShow: true, step: 'role' };

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
    setStep(state, action) {
      state.step = action.payload;
    }
  },
});

export const { showSurvey, hideSurvey, toggleSurvey, setStep } = surveySlice.actions;
export default surveySlice.reducer;
