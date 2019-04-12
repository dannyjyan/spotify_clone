import {connect} from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';
import { fetchPlaylists } from '../../actions/playlist_actions';
import {fetchSongs, fetchAlbums, fetchArtists} from '../../actions/song_actions';
import {receiveCurrentPlaylist, receivePlaylistSongs, receiveIsPlaying} from '../../actions/playback_actions'


const mapStateToProps = ({entities, session}, ownProps) => {  
  return ({
    playlist: entities.playlists[ownProps.match.params.playlistId],
    currentUser: entities.users[session.id],
    playlists: entities.playlists,
    songs: entities.songs,
    albums: entities.albums,
    artists: entities.artists
  
  })
}



const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists()),
  receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
  receivePlaylistSongs: (songs) => dispatch(receivePlaylistSongs(songs)),
  receiveIsPlaying: (isPlaying) => dispatch(receiveIsPlaying(isPlaying)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem)