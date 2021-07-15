import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserList.css";
import User from "../User/User";
import { loadUIUsers } from "../../../modules";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(loadUIUsers);

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
