import React from 'react';
import UserList from '../Users/UserList/UserList'
import LoginButton from "../Auth/Login/Login";
import NewUserComponent from "../Users/NewUser/NewUser";


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