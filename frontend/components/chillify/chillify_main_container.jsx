import {connect} from 'react-redux';
import ChillifyMain from './chillify_main';
import { fetchPlaylists } from '../../actions/playlist_actions';
import selectAllPlaylists from '../../reducers/playlist_selector'

const mapStateToProps = ({entities, session}) => {  
    return ({
        currentUser: entities.users[session.id],
        playlists: Object.values(entities.playlists)
    })
}

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChillifyMain)