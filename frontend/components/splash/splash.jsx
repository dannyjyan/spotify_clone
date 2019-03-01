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
                        <li className="nav-divider">|</li>
                        <li><Link to="/signup" id="splash-signup">Sign Up</Link></li>
                        <li><Link to="/login" id="splash-login">Log In</Link></li>

                    </ul>
                </nav>
            </div>
            <div className="splash-background"></div>
            <section>
                <div className="splash-main">
                    <h1>
                        Music for everyone.
                    </h1>
                    <h4>
                        Millions of songs. No credit card needed.
                    </h4>
                    <Link to="/signup">
                    GET SPOTIFY FREE
                    </Link>

                </div>
                <div>

                </div>
            </section>
        </div>
       )}
}


export default Splash;