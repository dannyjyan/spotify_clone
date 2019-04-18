import * as PlaylistApiUtil from "../util/playlist_api_util"

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist 
})

const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

const removePlaylist = (id) => ({
    type: REMOVE_PLAYLIST,
    id
})

const receiveAllPlaylists = () => ({
  type: RECEIVE_ALL_PLAYLISTS,
  id
})

//change later for search
export const fetchPlaylists = (userId) => dispatch => (
    PlaylistApiUtil.fetchPlaylists(userId).then(playlists => (
        dispatch(receivePlaylists(playlists))
    ))
)

export const fetchPlaylist = id => dispatch => (
    PlaylistApiUtil.fetchPlaylist(id).then(playlist => (
        dispatch(receivePlaylist(playlist))
    )) 
)

export const fetchAllPlaylist = () => dispatch => (
  PlaylistApiUtil.fetchAllPlaylists().then(() => (
      dispatch(receiveAllPlaylists())
  )) 
)


export const deletePlaylist = id => dispatch => (
    PlaylistApiUtil.deletePlaylist(id).then(() => (
        dispatch(removePlaylist(id))
    ))
)

//needs user_id and (playlist) name 
export const createPlaylist = playlist => dispatch => (
    PlaylistApiUtil.createPlaylist(playlist).then(playlist => (
        dispatch(receivePlaylist(playlist))
    )) 
)
