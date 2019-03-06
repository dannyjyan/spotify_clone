import React from 'react';
import {NavBar} from './navbar';
import {ChillifyMain} from './chillify_main';
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
            </div>
            <div className="now-playing-bar">
                NOW PLAYING COMPONENT
            </div>

        </>
    )
}
