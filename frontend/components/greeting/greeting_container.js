import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../util/session_api_util';

const mapStateToProps = ({entities, session}) => ({
    user: entities.users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)