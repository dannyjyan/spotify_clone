import React from 'react';
import {NavBar} from './navbar';
import {AuthRoute, ProtectedRoute, RootRoute} from '../../util/route_util';

import ChillifyMainContainer from './chillify_main_container';
import NowPlayingContainer from '../nowPlaying/now_playing_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container'
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
                    <div className="main-view">
                      <div className="main-view-container">
                        <Switch>
                          <Route
                            path="/playlist/:playlistId"
                            component={PlaylistIndexContainer}
                          />
                          <Route
                            path="/"
                            component={ChillifyMainContainer}
                          />

                        </Switch> 
                      </div>
                    </div>
                </div>
                <div className="Root-now-playing-bar">
                    <NowPlayingContainer />

                </div>                
            </>
        )
    }
}
export default ChillifyIndex; 
