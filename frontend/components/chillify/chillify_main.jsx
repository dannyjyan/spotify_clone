import React from 'react';
import {Link} from 'react-router-dom';
import {PlaylistIndexItem} from '../playlist/playlist_index_item';

export const ChillifyMain = () => {

    return (
        <div className="main-view">
            <div className="main-view-container">
                <section className="contentSpacing"> 
                    <nav className="main-content-nav">
                        <ul className="main-content-nav-list">
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">FEATURED</Link>
                            </li>
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">PODCASTS</Link>
                            </li>
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">CHARTS</Link>
                            </li>
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">GENRES</Link>
                            </li>
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">NEW RELEASES</Link>
                            </li>
                            <li className="mc-nav-list-elements">
                                <Link to="/" className="mc-nav-list-links">DISCOVER</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <section className="content">
                            <div>
                                <div className="grid-header">
                                    <h1 className="grid-header-text">Made for CURRENT USER</h1>
                                </div>
                                <div className="grid-container-fluid">
                                    <div className="grid-container-playlist">
                                        <PlaylistIndexItem />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}