import React, { useState, useEffect } from 'react';
import './UserList.css'
import axios from 'axios'

function UserList() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setUsers(jsonResponse))
  }, []); 

  console.log(users)

  return (
    <div>
      UserList: 
      {
        users.map(user => <li>{ user.firstName }</li>)
      }
    </div>
  )
}

export default UserList