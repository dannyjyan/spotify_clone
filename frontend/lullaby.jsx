import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import {signup, login, logout} from './util/session_api_util';
import {login, logout} from './actions/session_actions'
import configureStore from './store/store';
import {fetchPlaylists, fetchPlaylist, deletePlaylist} from './util/playlist_api_util'

document.addEventListener('DOMContentLoaded', () => {
    // configure store
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
         store = configureStore();
    }
    //test
    window.fetchPlaylist = fetchPlaylist;
    window.fetchPlaylists = fetchPlaylists;
    window.deletePlaylist = deletePlaylist;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.  dispatch;
    // end test
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
