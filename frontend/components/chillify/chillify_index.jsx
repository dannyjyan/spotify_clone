import React from 'react';
import SplashContainer from '../splash/splash_container';
import {NavBar} from './navbar'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';


export const ChillifyIndex = () => {
    return (
        <>
            <div className="top-container"> 
                <NavBar />
                <ChillifyMain />
                <div className="main-view">
                
                </div>   
            </div>
            <div className="now-playing-bar">
                NOW PLAYING COMPONENT
            </div>

        </>
    )
}
