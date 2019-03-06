import React from 'react';
import SplashContainer from './splash/splash_container';
import {ChillifyIndex} from './chillify/chillify_index';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const Main = ({ loggedIn }) => {
    return (
        !loggedIn ? (
            <SplashContainer {...props} />
            ) : (
            <ChillifyIndex {...props} />
        )
    );
};

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const MainComponent = withRouter(connect(mapStateToProps)(Main));

