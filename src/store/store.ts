import { configureStore } from "@reduxjs/toolkit";

import loaderSlice from "./slices/loaderSlice";

const store = configureStore({
  reducer: {
    loader: loaderSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;