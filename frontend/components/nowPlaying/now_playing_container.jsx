import { connect } from "react-redux";
import NowPlaying from './now_playing';
import { fetchSongs ,fetchAlbums} from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import {receiveCurrentPlaylist, receivePlaylistSongs, receiveIsPlaying} from '../../actions/playback_actions'
const mapStateToProps = ({entities, session, playback}) => {  
  return ({
    currentUser: entities.users[session.id],
    playback,
    currentSong: {
      title: "We Were Young",
      artist: "Odesza",
      album: "Summer's Gone",
      year: 2012,
      artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
      duration: 192,
      source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
    songs: entities.songs,
    artists: entities.artists,
    albums: entities.albums,
  
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
  receivePlaylistSongs: (songs) => dispatch(receivePlaylistSongs(songs)),
  receiveIsPlaying: (isPlaying) => dispatch(receiveIsPlaying(isPlaying)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)




