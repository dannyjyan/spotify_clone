import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
export const NavBar = () => {

    return (
        <div className="nav-bar-container">
        <nav className="nav-bar">
            <div className="nav-bar-expand">
                <div className="nav-bar-header">
                    <Link to="/" className="chillify-home-link">
                        <img className="spotify-logo-black" src={window.images.black_logo}/>
                        <span className="chillify-login-text">Chillify</span>
                    </Link>
                </div>
                <ul>
                    <li className="navBar-group">
                        <div className="navBar-item">
                            <Link to="/" className="nav-bar-link">
                                <div className="nav-bar-link-wrapper">
                                    <div className="nav-home-icon">
                                    </div>
                                    <span className="nav-bar-link-text"> Home
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="navBar-group">
                        <div className="navBar-item">
                            <Link to="/" className="nav-bar-link">
                                <div className="nav-bar-link-wrapper">
                                    <div className="nav-search-icon">
                                    </div>
                                    <span className="nav-bar-link-text"> Search
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="navBar-group">
                        <div className="navBar-item">
                            <Link to="/" className="nav-bar-link">
                                <div className="nav-bar-link-wrapper">
                                    <div className="nav-library-icon">
                                    </div>
                                    <span className="nav-library-link-text"> Your Library
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                </ul>

            </div>
            <div>
                <GreetingContainer />
            </div>
        </nav>
        </div>
    );
}