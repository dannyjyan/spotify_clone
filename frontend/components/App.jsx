import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import {AuthRoute, ProtectedRoute, RootRoute} from '../util/route_util';
import {MainComponent} from './Main';
  

export const App = () => {
    return (
    <>
        <header>
        </header>
        <Switch> 
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <RootRoute path="/" />
        </Switch>
    </>
)}
export default App;
{/* <h1><marquee>Chillify</marquee></h1>
<GreetingContainer />  */}
