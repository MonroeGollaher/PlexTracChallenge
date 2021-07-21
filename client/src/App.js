import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComponent from "./userAdmin/components/Home/Home";
import LoginButton from "./userAdmin/components/Auth/Login/Login";
import { loadUsers } from "./userAdmin/modules";
import userAdmin from "./userAdmin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={userAdmin} />
        <Route path="/auth" exact component={LoginButton} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
