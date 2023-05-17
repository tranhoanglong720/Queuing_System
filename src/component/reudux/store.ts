import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AccountSlice from "./slices/AccountSlices";
import RoleSlices from "./slices/RoleSlices";
const store = configureStore({
  reducer: {
    AcountSilces: AccountSlice.reducer,
    RoleSlices: RoleSlices.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch();
export default store;
