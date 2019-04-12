
export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';
export const RECEIVE_IS_PLAYING = 'RECEIVE_IS_PLAYING'

export const receiveCurrentPlaylist = playlistId => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlistId 
})

export const receiveCurrentSong = songId => ({
    type: RECEIVE_CURRENT_SONG,
    songId
})

export const receivePlaylistSongs = songs => ({
    type: RECEIVE_PLAYLIST_SONGS,
    songs
})

export const receiveIsPlaying = isPlaying => ({
  type: RECEIVE_IS_PLAYING,
  isPlaying
})

