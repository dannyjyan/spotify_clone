export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const RECEIVE_SONGS = 'RECEIVE_SONGS'
import * as SongApiUtil from '../util/song_api_util'


const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
})

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const fetchSongs = () => dispatch => (
    SongApiUtil.fetchSongs().then(songs => (
        dispatch(receiveSongs(songs))
    ))
)

export const fetchAlbums = () => dispatch => (
    SongApiUtil.fetchAlbums().then(albums => (
        dispatch(receiveAlbums(albums))
    ))
)
