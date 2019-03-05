import React from 'react'
import {Link} from 'react-router-dom'
class Splash extends React.Component{

    render(){
       return ( 
        <div className="splash-home-page">
            <div className="wrap">
                <div className="splash-container">
                    <div className="splash-navbar-header">
                        <nav className="splash-navbar"> 
                            <Link to="/" className="splash-logo">
                                <img className="spotify-logo" src={window.images.green_logo}/>
                                <span className="chillify-logo-text">Chillify</span>
                            </Link>
                            <ul className="splash-navbar-right">
                                <li>Premium</li>
                                <li>Help</li>
                                <li>Download</li>
                                <li className="nav-divider">|</li>
                                <li><Link to="/signup" className="splash-signup">Sign Up</Link></li>
                                <li><Link to="/login" className="splash-login">Log In</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <section>
                        <div className="splash-main">
                            <div className="splash-background"> </div>
                            <h1>
                                Music for everyone.
                            </h1>
                            <h4>
                                Millions of songs. No credit card needed.
                            </h4>
                            <Link to="/signup" className="btn-green signup-button">
                                GET SPOTIFY FREE
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
                <footer className="footer">
                    <div className="footer-container">
                        <Link to="/" className="splash-logo">
                            <img className="spotify-logo" src={window.images.green_logo}/>
                            <span className="chillify-logo-text">Chillify</span>
                        </Link>
                        <ul className="footer-links">
                            <li>
                                <a href="https://github.com/dannyjyan"> 
                                    <svg height="54" width="54">
                                        <circle cx="27" cy="27" r="27" stroke="black"  fill="#222325"></circle>
                                        <use src={window.images.linked_in} height="24px" width="24px"></use>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/danny-j-yan/">LinkedIn</a></li>
                        </ul>
                    </div>
                </footer>
        </div>
       )}
}


export default Splash;