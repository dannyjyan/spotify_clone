import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import {signup, login, logout} from './util/session_api_util';
import {login, logout} from './actions/session_actions'
import configureStore from './store/store';
import {fetchPlaylists, fetchPlaylist, deletePlaylist, createPlaylist} from './actions/playlist_actions'
import {fetchSongs, fetchAlbums} from './actions/song_actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faIgloo, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

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
    library.add(faIgloo)
    library.add(faPlay)
    library.add(faPause)
    library.add(faVolumeUp)
    library.add(faVolumeMute)
    //test
    // window.fetchSongs = fetchSongs;
    // window.fetchAlbums = fetchAlbums;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // end test
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
