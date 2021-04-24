import React from 'react';
import UserList from '../Users/UserList/UserList'
import LoginButton from "../Auth/Login/Login";
import NewUserComponent from "../Users/NewUser/NewUser";
import UpdateUser from "../Users/UpdateUser/UpdateUser";


const HomeComponent = () => {

  return (
    <div>
      Home
      <UserList />
      <LoginButton />
      <NewUserComponent />
      <UpdateUser />
    </div>
  )
}

export default HomeComponent