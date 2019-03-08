import React from 'react';
import {Link} from 'react-router-dom';
import {PlaylistIndexItem} from '../playlist/playlist_index_item';

class ChillifyMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            playlists: [],
            songs: [],
            albums: [],
            currentSong: {}
        }
        // // this.fetchSong = this.fetchSong.bind(this)
        this.getProps = this.getProps.bind(this)
    }
    getCoverPhoto(songId){
        let {songs, albums} = this.state;
        if (songs.length !== 0 && albums.length !== 0){
            let albumId = songs[songId].album_id;
            
            return albums[albumId].imageUrl
        }
        return ""
    }
    getPlaylistSongs(songIds){
        const pSongs = []
        for (let i = 0 ; i < songIds.length; i++){
            pSongs.push(this.state.songs[songIds[i]])
        }
        return pSongs;
    }
    getProps(){
        return this.props
    }
    componentDidMount(){
        this.props.fetchPlaylists()
            .then(playlists => {
                this.setState(playlists)
            });
        this.props.fetchSongs()
            .then(songs => {
                this.setState(songs)
            });
        this.props.fetchAlbums()
            .then(albums => {
                this.setState(albums)
            });

        // debugger
    }
    changeSong(){
        console.log()
        // this.setState(currentSong)
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
                                        {/* <h2>WOW {Object.values(this.state.songs).map((song) => <audio controls src={song.audioUrl}></audio>) }</h2> */}
                                        {/* <audio
                                            controls
                                            src={this.state.songUrl}>
                                        </audio> */}
                                    </div>
                                    <div className="grid-container-fluid">
                                        <div className="grid-container-playlist" >
                                            {this.props.playlists.map(plist => 
                                                <div className="playlist-index-item" onClick={this.changeSong()} key={plist.id} style={{backgroundImage: "url(" + this.getCoverPhoto(plist.songIds[0]) + ")"}}>
                                                    <div className="media-item">
                                                            {plist.name}
                                                    </div> 
                                                 </div>)
                                            }

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                {/* <Root-now-playing-bar>
                    <footer className="now-playing-bar-container">
                        <div className="now-playing-bar">
                            <div className="now-playing-bar-left">
                                <h3>Song Name</h3>
                            </div>
                            <div className="now-playing-bar-middle">
                                <audio
                                    controls
                                    src={this.state.songUrl}
                                />

                            </div>
                            <div className="now-playing-bar-right">
                                <h3>Volume Control</h3>
                            </div>
                        </div>
                    </footer>
                </Root-now-playing-bar> */}
            </div>
        )
    }
}
export default ChillifyMain;

{/* <PlaylistIndexItem key={plist.id} playlist={plist} songs={this.getPlaylistSongs(plist.songIds)} coverUrl={this.getCoverPhoto(plist.songIds[0])}/>)} */}