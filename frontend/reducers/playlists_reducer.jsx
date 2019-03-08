import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST} from '../actions/playlist_actions'
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    console.log(action)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_PLAYLIST:
            console.log(action);
            return merge(newState, {[action.playlist.id]: action.playlist});
        case RECEIVE_PLAYLISTS:
            return merge(newState, action.playlists);
        case REMOVE_PLAYLIST: 
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;