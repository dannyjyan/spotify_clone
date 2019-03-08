import {connect} from 'react-redux';
import ChillifyMain from './chillify_main';
import { fetchPlaylists } from '../../actions/playlist_actions';
import {fetchSongs, fetchAlbums} from '../../actions/song_actions';

const mapStateToProps = ({entities, session}) => {  
    return ({
        currentUser: entities.users[session.id],
        playlists: Object.values(entities.playlists),
        songs: Object.values(entities.songs),
        albums: Object.values(entities.albums),
    
    })
}

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchAlbums: () => dispatch(fetchAlbums())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChillifyMain)