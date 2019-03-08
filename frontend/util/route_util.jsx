import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from 'react-router-dom';
import SplashContainer from '../components/splash/splash_container';
import ChillifyIndex from '../components/chillify/chillify_index';


// renders component if logged out, otherwise redirects to the root url
const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
    )}/>
)


// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )}/>
)

const Root = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <ChillifyIndex {...props} />
        ) : (
            <SplashContainer {...props} />
        )
    )}/>
)



const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
}
  
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
  
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
  
export const RootRoute = withRouter(connect(mapStateToProps)(Root));