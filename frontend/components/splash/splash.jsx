import React from 'react'
import {Link} from 'react-router-dom'
class Splash extends React.Component{

    render(){
       return ( 
        <div className="splash-container">
            <div className="splash-navbar-header">
                <nav className="splash-navbar"> 
                    <span className="splash-logo">
                        Chillify
                    </span>
                    <ul className="splash-navbar-right">
                        <li>Premium</li>
                        <li>Help</li>
                        <li>Download</li>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="splash-background"></div>
            <header id="nav-splash">
                <div>
                    A whole lot of nothing
                </div>
                <div>

                </div>
            </header>

        </div>
       )}
}


export default Splash;