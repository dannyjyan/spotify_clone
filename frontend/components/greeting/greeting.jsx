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
            <h2 className="welcome-message">{currentUser.username} </h2>
            <button className="logout-button" onClick={logout}>Logout</button>
        </hgroup>
    )
    
    return currentUser ? loggedInGreeting() : loggedOutLinks();
}

export default Greeting;