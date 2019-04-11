
export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';
export const RECEIVE_IS_PLAYING = 'RECEIVE_IS_PLAYING'

export const receiveCurrentPlaylist = playlist => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlist 
})

export const receiveCurrentSong = songId => ({
    type: RECEIVE_CURRENT_SONG,
    playlists
})

export const receivePlaylistSongs = playlist => ({
    type: RECEIVE_PLAYLIST_SONGS,
    id
})

export const receiveIsPlaying = isPlaying => ({
  type: RECEIVE_IS_PLAYING,
  isPlaying
})

