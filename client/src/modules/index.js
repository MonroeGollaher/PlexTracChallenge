import { createReducer, createAction, createSelector } from "@reduxjs/toolkit";
import api, { createNewUser, fetchUsers } from "./api";

// Selectors

export const getUserAdminState = (state) => state.userAdmin;
export const getFirst = (state) => state.userAdmin.userData.first;
export const getLast = (state) => state.userAdmin.userData.last;
export const getUsername = (state) => state.userAdmin.userData.username;
export const getEmail = (state) => state.userAdmin.userData.email;
export const getPassword = (state) => state.userAdmin.userData.password;
export const getUsersById = (state) => state.userAdmin.userIds;
export const loadUIUsers = (state) => state.userAdmin.users;

// Actions
export const userAdminInit = createAction("userAdmin/init");
export const updateField = createAction("userAdmin/updateField");
export const createUser = createAction("userAdmin/createUser");
export const userCreated = createAction("userAdmin/userCreated");
export const deleteUser = createAction("userAdmin/deleteUser");
export const loadUsers = createAction("userAdmin/loadUsers");
export const usersReceived = createAction("userAdmin/usersReceived");

export const INITIAL_STATE = {
  blurredFields: {},
  users: [],
  userIds: [],
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
  builder.addCase(createUser, (state, action) => {
    console.log("user created:" + action.payload);
  });
  builder.addCase(userCreated, (state, action) => {
    console.log("created", action.payload);
  });
  builder.addCase(usersReceived, (state, action) => {
    console.log("users received", action.payload);
    state.users = [...action.payload];
    console.log("USER STATE", state.users);
  });
  builder.addCase(loadUsers, (state, action) => {
    console.log("loading users...");
  });
  // builder.addCase(deleteUser, (state, action) => {
  //   const userID = action.payload;
  //   return state.users.filter((user) => user._id !== action.payload);
  // });
});

export default userAdminReducer;
