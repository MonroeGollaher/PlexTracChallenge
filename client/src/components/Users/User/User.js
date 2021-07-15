import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import axios from "axios";
import { deleteUser } from "../../../modules";
// import { deleteUser } from "../../../actions/users";

const User = ({ firstName, lastName, email, username, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedUser, setEditUser] = useState({
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
  });

  // function updateUser(e) {
  //   e.preventDefault();
  //   axios.put(url + id, {
  //     firstName: editedUser.firstName,
  //   });
  //   setModalIsOpen(false);
  // }

  function handleChange(e) {
    const editData = { editedUser };
    editData[e.target.id] = e.target.value;
    setEditUser(editData);
  }

  const handleRemove = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
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
            onChange={(e) => handleChange(e)}
            id="firstName"
            value={editedUser.firstName}
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
