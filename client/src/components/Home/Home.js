import React from 'react';
import UserList from '../User/UserList/UserList'
import LoginButton from "../Auth/Login/Login";
import NewUserComponent from "../User/NewUser/NewUser";


const HomeComponent = () => {
  return (
    <div>
      Home
      <UserList />
      <LoginButton />
      <NewUserComponent />
    </div>
  )
}

export default HomeComponent