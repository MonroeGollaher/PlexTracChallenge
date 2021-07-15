import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  getFirst,
  getLast,
  getEmail,
  getUsername,
  getPassword,
  createUser,
} from "../../../modules";

import "./NewUser.css";

const NewUserComponent = () => {
  const dispatch = useDispatch();
  const newUser = {
    firstName: useSelector(getFirst),
    lastName: useSelector(getLast),
    email: useSelector(getEmail),
    username: useSelector(getUsername),
    password: useSelector(getPassword),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(newUser));
  };

  const handleNewUser = ({ target: { id, value } }) => {
    dispatch(updateField({ fieldName: id, value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNewUser}
          value={newUser.firstName}
          id="first"
          placeholder="First Name"
          type="text"
        />
        <input
          onChange={handleNewUser}
          value={newUser.lastName}
          id="last"
          placeholder="Last Name"
          type="text"
        />
        <input
          onChange={handleNewUser}
          value={newUser.email}
          id="email"
          placeholder="Email"
          type="text"
        />
        <input
          onChange={handleNewUser}
          value={newUser.password}
          id="password"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={handleNewUser}
          value={newUser.username}
          id="username"
          placeholder="username"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewUserComponent;
