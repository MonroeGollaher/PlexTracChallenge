import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import axios from "axios";
import { deleteUser, editUser, getActiveUser } from "../../../modules";

const User = ({ firstName, lastName, email, username, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedUser, setEditData] = useState({
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    id: id,
  });

  function updateUser(e) {
    e.preventDefault();
    dispatch(editUser(editedUser));
    setModalIsOpen(false);
  }

  const handleRemove = (id) => {
    dispatch(deleteUser(id));
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <h4>
        Name: {firstName} {lastName}
      </h4>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Id: {id} </p>
      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Update
      </button>

      {/* Modal for Updating User. Maybe nav to diff page? */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <form
          onSubmit={(e) => {
            updateUser(e);
          }}
        >
          <h1>
            {firstName} {lastName}
          </h1>
          <input
            type="text"
            placeholder={firstName}
            onChange={(e) =>
              setEditData({ ...editedUser, firstName: e.target.value })
            }
            id="firstName"
            value={editedUser.firstName}
          />
          <input
            type="text"
            placeholder={lastName}
            onChange={(e) =>
              setEditData({ ...editedUser, lastName: e.target.value })
            }
            id="lastName"
            value={editedUser.lastName}
          />
          <button>Submit</button>
        </form>
        <button type="button" onClick={() => handleRemove(id)}>
          delete
        </button>
      </Modal>
    </div>
  );
};

export default User;
