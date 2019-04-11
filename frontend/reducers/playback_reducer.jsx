import {RECEIVE_CURRENT_PLAYLIST, RECEIVE_PLAYLIST_SONGS, RECEIVE_IS_PLAYING} from '../actions/playback_actions';
import merge from 'lodash/merge';


let defPlaylist = {
  currentPlaylist: 1,
  playbackSongs: [1,2,3,4,5], //might not need
  isPlaying: false
}

const playbackReducer = (state = defPlaylist, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_CURRENT_PLAYLIST: 
        return newState['currentPlaylist'] = action.playlist;
      case RECEIVE_PLAYLIST_SONGS:
        return newState['playbackSongs'] = action.songs
      case RECEIVE_IS_PLAYING:
        return newState['isPlaying'] = action.isPlaying;
      default:
        return newState;
    }
}

export default playbackReducer;