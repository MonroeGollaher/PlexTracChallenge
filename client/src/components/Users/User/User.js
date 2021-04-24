import React from 'react'

const User = ({ firstName, lastName, email, username, id}) => {

  function getUserInfo({ id }){
    console.log(id);
   }

  return (
    <div onClick={ () => { getUserInfo({id}) } } className="container">
      <h4>Name: { firstName } { lastName }</h4>
      <p>Email: { email }</p>
      <p>Username: { username }</p>
      <p>Id: { id } </p>
    </div>
  )
}

export default User
