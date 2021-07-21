import { createReducer, createAction, createSelector } from "@reduxjs/toolkit";
import api, { createNewUser, fetchUsers } from "./api";
import { VIEWS } from "../../constants";

// Selectors

export const getUserAdminState = (state) => state.userAdmin;
export const getView = (state) => state.userAdmin.currentView;
export const getActiveUser = (state) => state.userAdmin.userData;
export const getFirst = (state) => state.userAdmin.userData.firstName;
export const getLast = (state) => state.userAdmin.userData.lastName;
export const getUsername = (state) => state.userAdmin.userData.username;
export const getEmail = (state) => state.userAdmin.userData.email;
export const getPassword = (state) => state.userAdmin.userData.password;
export const getBirthYear = (state) => state.userAdmin.userData.birthYear;
export const getFavoriteColor = (state) =>
  state.userAdmin.userData.favoriteColor;
export const getUsersById = (state) => state.userAdmin.userIds;
export const loadUIUsers = (state) => state.userAdmin.users;

// Actions
export const userAdminInit = createAction("userAdmin/init");
export const updateField = createAction("userAdmin/updateField");
export const createUser = createAction("userAdmin/createUser");
export const userCreated = createAction("userAdmin/userCreated");
export const deleteUser = createAction("userAdmin/deleteUser");
export const editUser = createAction("userAdmin/editUser");
export const loadUsers = createAction("userAdmin/loadUsers");
export const usersReceived = createAction("userAdmin/usersReceived");

export const INITIAL_STATE = {
  currentView: VIEWS.HOME,
  blurredFields: {},
  users: [],
  userIds: [],
  userData: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthYear: "",
    favoriteColor: "",
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
    console.log("created", action.payload.user);
  });
  builder.addCase(usersReceived, (state, action) => {
    state.users = action.payload;
    console.log("USER STATE", state.users);
  });
  builder.addCase(loadUsers, (state, action) => {
    console.log("loading users...");
  });
  builder.addCase(deleteUser, (state, action) => {
    const userID = action.payload;
    state.userIds = state.userIds.filter((id) => id !== userID);
  });
  builder.addCase(editUser, (state, action) => {
    console.log(action.payload, "hello");
  });
});

export default userAdminReducer;
