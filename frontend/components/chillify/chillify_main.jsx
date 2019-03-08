import React from 'react';
import {Link} from 'react-router-dom';
import {PlaylistIndexItem} from '../playlist/playlist_index_item';

class ChillifyMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            playlists: []
        }
        // // this.fetchSong = this.fetchSong.bind(this)
    }

    // fetchSong(id) {
    //     $.ajax({
    //         url: `api/songs/${id}`
    //     }).then(song => {
    //         this.setState(song)
    //     })
    // }
    componentDidMount(){
        this.props.fetchPlaylists()
            .then(playlists => {
                this.setState(playlists)
            });
        
        // debugger
    }
    render(){
        // debugger
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
                                        <h1 className="grid-header-text">Made for {this.props.currentUser.username}</h1>
                                        {/* <h2>WOW {this.state.id}</h2>
                                        <audio
                                            controls
                                            src={this.state.songUrl}>
                                        </audio> */}
                                            
                                    </div>
                                    <div className="grid-container-fluid">
                                        <div className="grid-container-playlist">
                                            {this.props.playlists.map(plist => <PlaylistIndexItem key={plist.id} playlist={plist} />)}
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
}
export default ChillifyMain;