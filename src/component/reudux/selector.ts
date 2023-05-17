import { createSelector } from "@reduxjs/toolkit";

export const ListUserSlector = (state: any) => state.AcountSilces;

export const ListUserAcount = createSelector(ListUserSlector, (User) => {
  return User.ListUser;
});

//Role

export const ListRoleSelector = (state: any) => state.RoleSlices;

export const ListRoleFind = createSelector(ListRoleSelector, (role) => {
  return role.ListRole;
});
