import './App.css';
import React, { useEffect, useState } from 'react';
import UserList from "./components/UserList/UserList";
import axios from 'axios'


function App() {

  return (
    <div className="App">
      <UserList />
    </div>
  )
  
}

export default App;
