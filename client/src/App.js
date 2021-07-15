import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComponent from "./components/Home/Home";
import LoginButton from "./components/Auth/Login/Login";
import { loadUsers } from "./modules";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/auth" exact component={LoginButton} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
