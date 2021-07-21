import React from "react";
import { useSelector } from "react-redux";
import { getView } from "./modules";
import { VIEWS } from "../constants";
import HomeComponent from "./components/Home/Home";
import LoginButton from "./components/Auth/Login/Login";

function userAdmin() {
  const currentView = useSelector(getView);
  const renderView = () => {
    switch (currentView) {
      case VIEWS.HOME:
        return <HomeComponent />;
      case VIEWS.LOGIN:
        return <LoginButton />;
      default:
        return <div />;
    }
  };

  return <div>{renderView()}</div>;
}

export default userAdmin;
