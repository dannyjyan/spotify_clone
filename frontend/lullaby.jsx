import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    // configure store
    const store = configureStore();
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});

/** 
 * {
  entities: {
    users: {}
  },
  session: {
    id: null,
  },
  errors: {
    session: ["Invalid credentials"]
  }
}
  
 */