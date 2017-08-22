import React from 'react';
import ReactDOM from 'react-dom';
import * as APISessionUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = APISessionUtil.login;
  window.logout = APISessionUtil.logout;
  ReactDOM.render(<h1>phasebook</h1>, root);
});
