import * as SessionApiUtil from '../util/session_api_util'
// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// logoutCurrentUser() (regular action creator)
// receiveErrors(errors) (regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
    return {
        currentUser,
        type: RECEIVE_CURRENT_USER 
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveSessionErrors = (errors) => {  //errors is an array
    return {
        errors,
        type: RECEIVE_SESSION_ERRORS
    }
}

export const login = (user) => (dispatch) => {
    SessionApiUtil.signup(user)
        .then(user => dispatch(login(user)))
}

export const logout = () => (dispatch) => {
    SessionApiUtil.signup()
        .then(() => dispatch(logout()))
}
export const signup = (user) => (dispatch) => {
    SessionApiUtil.signup(user)
        .then(user => dispatch(signup(user)))
}


