import React from 'react';
import UserList from '../User/UserList/UserList'
import LoginButton from "../Auth/Login/Login";


const HomeComponent = () => {
  return (
    <div>
      Home
      <UserList />
      <LoginButton />
    </div>
  )
}

export default HomeComponent