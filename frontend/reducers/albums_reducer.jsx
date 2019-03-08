import {RECEIVE_ALBUMS} from '../actions/song_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    // console.log(action)
    // debugger
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALBUMS:
            return action.albums;
        default:
            return state;
    }
}

export default albumsReducer;