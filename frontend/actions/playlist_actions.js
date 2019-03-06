import * as PlaylistApiUtil from "../util/playlist_api_util"

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist 
})

const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

const removePlaylist = id => ({
    type: REMOVE_PLAYLIST,
    playlistId: id
})

//change later for search
export const fetchPlaylists = () => dispatch => (
    PlaylistApiUtil.fetchPlaylists().then(playlists => (
        dispatch(receivePlaylists(playlists))
    ))
)

export const fetchPlaylist = id => dispatch => (
    PlaylistApiUtil.fetchPlaylist(id).then(playlist => (
        dispatch(receivePlaylist(playlist))
    )) 
)

export const deletePlaylist = id => dispatch => (
    PlaylistApiUtil.deletePlaylist(id).then(playlist => (
        dispatch(removePlaylist(playlist))
    ))
)

//needs user_id and (playlist) name 
export const createPlaylist = playlist => dispatch => (
    PlaylistApiUtil.createPlaylist(playlist).then(playlist => (
        dispatch(receivePlaylist(playlist))
    )) 
)