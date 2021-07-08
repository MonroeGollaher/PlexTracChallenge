import React, { useState, useEffect } from "react";
import "./UserList.css";
import User from "../User/User";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setUsers(jsonResponse));
  }, []);

  console.log("Users:", users);

  return (
    <div className="container">
      {users.map((user, index) => {
        return (
          <User
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            username={user.username}
            id={user._id}
          />
        );
      })}
    </div>
  );
}

export default UserList;
