import React from 'react';
import {NavBar} from './navbar';
import {AuthRoute, ProtectedRoute, RootRoute} from '../../util/route_util';

import ChillifyMainContainer from './chillify_main_container';
import NowPlaying from '../now_playing';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';


class ChillifyIndex extends React.Component{ 
      
    render() {
        return (
            <>
                <div className="top-container"> 
                    <NavBar />
                    <ChillifyMainContainer />
                </div>
                <div className="Root-now-playing-bar">
                    <NowPlaying />

                </div>                
            </>
        )
    }
}
export default ChillifyIndex; 
