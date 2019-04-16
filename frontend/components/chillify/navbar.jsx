import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar = () => {

  return (
    <div className="nav-bar-container">
    <nav className="nav-bar">
        <div className="nav-bar-header">
          <Link to="/" className="chillify-home-link">
            <i className="fa fa-spotify fa-3x"></i>  
            <span className="chillify-login-text">&nbsp;Chillify</span>
          </Link>
        </div>
        <ul>
          <li className="navBar-group">
            <div className="navBar-item">
              <Link to="/" className="nav-bar-link">
                <div className="nav-bar-link-wrapper">
                  <div className="nav-home-icon">
                    <FontAwesomeIcon icon="home"/> 
                    <span className="navbar-link-text">Home</span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li className="navBar-group">
            <div className="navBar-item"> 
              <Link to="/" className="nav-bar-link">
                <div className="nav-bar-link-wrapper">
                  <div className="nav-search-icon">
                    <FontAwesomeIcon icon="search"/>
                    <span className="navbar-link-text">Search</span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li className="navBar-group">
            <div className="navBar-item">
              <Link to="/" className="nav-bar-link">
                <div className="nav-bar-link-wrapper">
                  <div className="nav-library-icon">
                    <FontAwesomeIcon icon="book"/>
                    <span className="navbar-link-text">Your Library</span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        </ul>
        <div className="nav-recent-playlists"> Recently Played
        </div>

        <div className="current-user-container">
          <GreetingContainer />
        </div>
    </nav>
    </div>
  );
}