import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import {signup, login, logout} from './util/session_api_util';
import {login, logout} from './actions/session_actions'
import configureStore from './store/store';
import {fetchPlaylists, fetchPlaylist, deletePlaylist, createPlaylist} from './actions/playlist_actions'


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
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // end test
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
