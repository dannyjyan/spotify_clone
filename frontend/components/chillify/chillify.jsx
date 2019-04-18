import {connect} from 'react-redux';
import ChillifyMain from './chillify_main';
import { fetchPlaylists, fetchAllPlaylists } from '../../actions/playlist_actions';
import {fetchSongs, fetchAlbums, fetchArtists} from '../../actions/song_actions';

const mapStateToProps = ({entities, session}) => {  
    return ({
        currentUser: entities.users[session.id],
        playlists: entities.playlists,
        songs: entities.songs,
        albums: entities.albums,
    
    })
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
    fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists())

})

export default connect(mapStateToProps, mapDispatchToProps)(ChillifyMain)