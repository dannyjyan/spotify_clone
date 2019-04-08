import {RECEIVE_SONGS, RECEIVE_ARTISTS} from '../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    // console.log(action)
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_SONGS:
        return merge(newState, action.songs);
      default:
        return state;
    }
}

export default songsReducer