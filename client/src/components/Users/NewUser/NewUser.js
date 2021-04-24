import React, { useState } from 'react';
import './NewUser.css'
import axios from 'axios'


const NewUserComponent = () => {

  const url='http://localhost:5000/user'

  const [newUser, setnewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })

  function createUser(e){
    e.preventDefault()
    axios.post(url, {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      username: newUser.username,
    })
    .then(res => {
      console.log(res.data);
    })
  }

  function handle(e){
    const newData = { ... newUser }
    newData[e.target.id] = e.target.value
    setnewUser(newData)
  }

  return (
    <div>
      <form onSubmit={ (e) => createUser(e)}>
        <input onChange={ (e) => handle(e) } id="firstName" value={ newUser.firstName } placeholder="First Name" type="text"></input>
        <input onChange={ (e) => handle(e) } id="lastName" value={ newUser.lastName } placeholder="Last Name" type="text"></input>
        <input onChange={ (e) => handle(e) } id="email" value={ newUser.email } placeholder="Email" type="text"></input>
        <input onChange={ (e) => handle(e) } id="password" value={ newUser.password } placeholder="Password" type="password"></input>
        <input onChange={ (e) => handle(e) } id="username" value={ newUser.username } placeholder="username" type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewUserComponent

