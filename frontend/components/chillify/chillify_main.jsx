import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import {PlaylistIndexItem} from '../playlist/playlist_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ChillifyMain extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // playlists: [],
      // songs: [],
      // albums: [],
      // currentSong: {}
    }
    // // this.fetchSong = this.fetchSong.bind(this)
    this.getProps = this.getProps.bind(this)
    this.hoverPlayOn = this.hoverPlayOn.bind(this);
    this.hoverPlayOff = this.hoverPlayOff.bind(this);
  }
  getCoverPhoto(songId){
    let {songs, albums} = this.state;

    if (songs !== undefined && albums !== undefined){
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
  hoverPlayOn(id){
    document.querySelector(".playlist-photo-"+ id).classList.add("show");
  }
  hoverPlayOff(id){
    document.querySelector(".playlist-photo-"+ id).classList.remove("show");
  }
  componentWillMount(){
    console.log(this.props)
    this.props.fetchPlaylists(this.props.currentUser.id).then(p => {
        this.props.fetchSongs().then(s => {
          this.props.fetchAlbums().then(a => {
            this.props.fetchArtists().then(art => {
              this.setState({
                playlists: p.playlists,
                songs: s.songs,
                albums: a.albums,
                artists: art.artists
              })
          })
          })
        })
      })
  }
  changeSong(){
    // console.log()
    // this.setState(currentSong)
  }
  render(){
    // console.log(this.props)
    return (
          <> 
            <nav className="main-content-nav">
              <ul className="main-content-nav-list">
                <li className="mc-nav-list-elements">
                  <Link to="/" className="mc-nav-list-links" onClick={this.getProps}>FEATURED</Link>
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
                  </div>
                  <div className="grid-container-fluid">
                    <div className="grid-container-playlist">
                      { this.state.playlists ? 
                        Object.values(this.state.playlists).map(plist => 
                          <div className="playlist-index-item" key={"playlist-" + plist.id}>
                            <Link to={"/playlist/" + plist.id} className={"playlist-index-photo"}  onMouseLeave={() => this.hoverPlayOff(plist.id)} onMouseEnter={() => this.hoverPlayOn(plist.id)} style={{backgroundImage: "url(" + this.getCoverPhoto(plist.songIds[0]) + ")"}}>
                              <FontAwesomeIcon  className={"playlist-play-toggle "+ "playlist-photo-" + plist.id}  icon="play-circle" />

                            </Link>
                            <div className="media-item">
                              {plist.name}
                            </div> 
                          </div>
                          ) 
                          
                        : ""
                    
                      }



                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
    )
  }
}
export default ChillifyMain;

{/* <PlaylistIndexItem key={plist.id} playlist={plist} songs={this.getPlaylistSongs(plist.songIds)} coverUrl={this.getCoverPhoto(plist.songIds[0])}/>)} */}