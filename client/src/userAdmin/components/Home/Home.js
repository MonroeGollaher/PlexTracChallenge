import React from "react";
import UserList from "../Users/UserList/UserList";
import NewUserComponent from "../Users/NewUser/NewUser";
import LoginButton from "../Auth/Login/Login";

const HomeComponent = () => {
  return (
    <div>
      Home
      <UserList />
      <LoginButton />
      <NewUserComponent />
    </div>
  );
};

export default HomeComponent;
