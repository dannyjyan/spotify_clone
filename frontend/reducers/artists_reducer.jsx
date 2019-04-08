import {RECEIVE_ARTISTS} from '../actions/song_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_ARTISTS: 
        return merge(newState, action.artists)
      default:
        return newState;
    }
}

export default artistsReducer;