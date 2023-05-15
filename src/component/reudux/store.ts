import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AccountSlice from "./slices/AccountSlices";
const store = configureStore({
  reducer: {
    AcountSilces: AccountSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch();
export default store;
