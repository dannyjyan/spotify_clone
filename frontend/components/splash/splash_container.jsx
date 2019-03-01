import Splash from "./splash"
import {connect} from 'react-redux';


const mapStateToProps = ({errors}) => ({
    errors
})

export default connect(mapStateToProps)(Splash);


