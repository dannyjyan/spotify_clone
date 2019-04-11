import {RECEIVE_CURRENT_PLAYLIST, RECEIVE_PLAYLIST_SONGS, RECEIVE_IS_PLAYING} from '../actions/playback_actions';
import merge from 'lodash/merge';


let defPlaylist = {
  currentPlaylist: 1,
  playbackSongs: [],
  
}

const playbackReducer = (state = defPlaylist, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_CURRENT_PLAYLIST: 
        return merge(newState, action.artists)

      case RECEIVE_PLAYLIST_SONGS:

      case RECEIVE_IS_PLAYING:


      default:
        return newState;
    }
}

export default artistsReducer;