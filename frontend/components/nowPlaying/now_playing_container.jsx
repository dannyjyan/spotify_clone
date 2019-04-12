import { connect } from "react-redux";
import NowPlaying from './now_playing';
import { fetchSongs ,fetchAlbums} from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import {receiveCurrentSong,receiveCurrentPlaylist, receivePlaylistSongs, receiveIsPlaying} from '../../actions/playback_actions'
const mapStateToProps = ({entities, session, playback}) => {  
  return ({
    currentUser: entities.users[session.id],
    playback,
    playlists: entities.playlists,
    songs: entities.songs,
    artists: entities.artists,
    albums: entities.albums,
  
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  receiveCurrentPlaylist: (playlistId) => dispatch(receiveCurrentPlaylist(playlistId)),
  receivePlaylistSongs: (songs) => dispatch(receivePlaylistSongs(songs)),
  receiveIsPlaying: (isPlaying) => dispatch(receiveIsPlaying(isPlaying)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)




