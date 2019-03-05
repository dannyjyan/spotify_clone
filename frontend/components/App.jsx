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
import {AuthRoute, ProtectedRoute} from '../util/route_util';
  

export const App = () => {
    return (
    <>
        <header>
            <GreetingContainer />
        </header>
        <Switch> 
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </>
)}
export default App;
{/* <h1><marquee>Chillify</marquee></h1>
<GreetingContainer />  */}
