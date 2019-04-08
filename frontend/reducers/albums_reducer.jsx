import {RECEIVE_ALBUMS} from '../actions/song_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
      case RECEIVE_ALBUMS:
        return merge(newState, action.albums);
      default:
        return newState;
    }
}

export default albumsReducer;