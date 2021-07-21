import React from "react";
import { useSelector } from "react-redux";
import { getView } from "./modules";
import { VIEWS } from "../constants";
import HomeComponent from "./components/Home/Home";

function userAdmin() {
  const currentView = useSelector(getView);
  const renderView = () => {
    switch (currentView) {
      case VIEWS.HOME:
        return <HomeComponent />;

      default:
        return <div />;
    }
  };

  return <div>{renderView()}</div>;
}

export default userAdmin;
