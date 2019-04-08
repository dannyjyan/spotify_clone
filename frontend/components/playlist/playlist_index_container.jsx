import {connect} from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';
import { fetchPlaylists } from '../../actions/playlist_actions';
import {fetchSongs, fetchAlbums, fetchArtists} from '../../actions/song_actions';

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

// const mapStateToProps = (state, ownProps) => ({
//   playlist: state.entities.playlists[ownProps.match.params.playlistId],
//   songs: state.entities.songs,
//   currentUser: state.entities.users[state.session.id],
//   playlists: state.entities.playlists
// });


const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem)