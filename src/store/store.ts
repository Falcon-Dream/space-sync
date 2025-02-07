import { configureStore } from "@reduxjs/toolkit";

import loaderSlice from "./slices/loaderSlice";
import surveySlice from "./slices/surveySlice";

const store = configureStore({
  reducer: {
    loader: loaderSlice,
    survey: surveySlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
