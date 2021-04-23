import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeComponent from "./components/Home/Home";
import LoginButton from "./components/Auth/Login/Login";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ HomeComponent }/>
        <Route path="/auth" exact component={ LoginButton }/>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
