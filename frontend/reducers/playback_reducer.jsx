import {RECEIVE_CURRENT_PLAYLIST, RECEIVE_PLAYLIST_SONGS, RECEIVE_IS_PLAYING, RECEIVE_CURRENT_SONG} from '../actions/playback_actions';
import merge from 'lodash/merge';


let defPlaylist = {
  currentPlaylist: 1,
  playbackSongs: [1,2,3,4,5], //might not need
  isPlaying: false,
  currSongIdx: 0
}

const playbackReducer = (state = defPlaylist, action) => {
  // if (Object.values({}).length === 0) state = defPlaylist;
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_CURRENT_PLAYLIST: 
        newState['currentPlaylist'] = action.playlistId;
        break;
      case RECEIVE_PLAYLIST_SONGS:
        newState['playbackSongs'] = action.songs
        break;
      case RECEIVE_IS_PLAYING:
        newState['isPlaying'] = action.isPlaying;
        break;
      case RECEIVE_CURRENT_SONG:
        newState['currSongIdx'] = action.songId;
        break;
      default:
        return newState;
    }
    return newState;
}

export default playbackReducer;