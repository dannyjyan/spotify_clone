import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const loggedOutLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In</Link> 
            
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
    const loggedInGreeting = () => (
        <hgroup className="header-group">
            
            <div className="welcome-message">
              <div className="user-avatar"> 
              </div>
              <div className="user-name">
                {currentUser.username}
              </div> 
            </div>
            <div className="nav-bar-link-wrapper"> 
              <div className="logout-button" onClick={logout}>Logout</div>
            </div>
        </hgroup>
    )
    
    return currentUser ? loggedInGreeting() : loggedOutLinks();
}

export default Greeting;