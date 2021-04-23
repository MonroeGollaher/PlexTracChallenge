import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain = { REACT_APP_DOMAIN }
      clientId = { REACT_APP_CLIENT_ID }
      redirectUri={ window.location.origin }
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

