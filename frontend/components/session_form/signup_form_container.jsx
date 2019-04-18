import React from 'react';
import { connect } from 'react-redux';
import { signup, login} from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
})

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);