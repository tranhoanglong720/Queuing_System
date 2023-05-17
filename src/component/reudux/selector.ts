import { createSelector } from "@reduxjs/toolkit";

export const ListUserSlector = (state: any) => state.AcountSilces;

export const ListUserAcount = createSelector(ListUserSlector, (User) => {
  return User.ListUser;
});
