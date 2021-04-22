import React, { useState, useEffect } from 'react';
import './UserList.css'
import axios from 'axios'

const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/user').then(res => {
      if(res.ok){
        return res.json
      }
    }).then(jsonResponse => console.log(jsonResponse))
  }, []); 

  return (
    <div>
      <h1>User List</h1>
    </div>
  )
}

export default UserList