import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeComponent from "./components/Home/Home";
import AuthComponent from './components/Auth/Auth'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ HomeComponent }/>
        <Route path="/auth" exact component={ AuthComponent }/>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
