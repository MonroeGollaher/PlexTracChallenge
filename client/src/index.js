import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

import { Auth0Provider } from "@auth0/auth0-react";

const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_DOMAIN}
      clientId={REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
