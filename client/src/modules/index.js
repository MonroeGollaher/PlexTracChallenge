import { createReducer, createAction, createSelector } from "@reduxjs/toolkit";

// Simple Selectors

export const getUserAdminState = (state) => state.userAdmin;
export const getFirst = (state) => state.userAdmin.userData.first;
export const getLast = (state) => state.userAdmin.userData.last;
export const getUsername = (state) => state.userAdmin.userData.username;
export const getEmail = (state) => state.userAdmin.userData.email;
export const getPassword = (state) => state.userAdmin.userData.password;

// Actions
export const updateField = createAction("userAdmin/updateField");
export const createUser = createAction("userAdmin/createUser");

export const INITIAL_STATE = {
  blurredFields: {},
  userData: {
    first: "",
    last: "",
    username: "",
    email: "",
    password: "",
  },
};

export const userAdminReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(updateField, (state, action) => {
    const { fieldName, value } = action.payload;
    state.userData[fieldName] = value;
  });
  builder.addCase(createUser, (state) => {
    const { fieldName, value } = action.payload;
    state.userData[fieldName] = value;
  });
});

export default userAdminReducer;
