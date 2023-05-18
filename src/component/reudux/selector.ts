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

//Service

export const ListServiceSelector = (state: any) => state.ServiceSlices;

export const ListServiceFind = createSelector(
  ListServiceSelector,
  (service) => {
    return service.ListService;
  }
);

//Level

export const ListLevelSelector = (state: any) => state.LevelSlices;

export const ListLevelFind = createSelector(ListLevelSelector, (Level) => {
  return Level.ListLevel;
});
