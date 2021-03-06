import React from 'react';
import {Link} from 'react-router-dom'
import SongIndexItem from './song_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { receiveCurrentPlaylist } from '../../actions/playback_actions';


class PlaylistIndexItem extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    currentSongId: 0
  }
  this.getSongs = this.getSongs.bind(this);
  this.changePlaylist = this.changePlaylist.bind(this)
  this.changeSong = this.changeSong.bind(this)
;  }

  componentWillMount(){
    this.props.fetchSongs()
    this.props.fetchArtists()
    this.props.fetchAlbums()
    this.props.fetchPlaylists(this.props.currentUser.id)
  // this.props.fetchArtists()
  // this.props.fetchAlbums()
  // this.props.fetchPlaylists(this.props.currentUser.id).then(() => this.render())
      // let playlist = this.props.playlists[this.props.match.params.playlistId]
      // this.setState({
      //   playlist
  // });
  }
  componentDidMount(){
    document.getElementsByClassName('top-container')[0].setAttribute('style', 'background-image: linear-gradient(to right bottom, rgb(55, 67, 98), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)')
  }
  changePlaylist(){
    this.props.receiveCurrentPlaylist(this.props.playlist.id)
    this.props.receivePlaylistSongs(this.props.playlist.songIds)
    this.props.receiveCurrentSong(0);
  }
  changeSong(id){
    this.props.receiveCurrentPlaylist(this.props.playlist.id)
    this.props.receivePlaylistSongs(this.props.playlist.songIds)
    let plistSongIdx = 0;
    for(let i = 0; i < this.props.playlist.songIds.length; i++){
      if (this.props.playlist.songIds[i] === id) {
        plistSongIdx = i
        break;
      }
    }
    this.props.receiveCurrentSong(plistSongIdx);
  }
  getCoverPhoto(songId){
  let {songs, albums} = this.props;
  if (songs !== undefined && Object.entries(songs).length !== 0 && albums !== undefined && Object.entries(albums).length !== 0){
    let albumId = songs[songId].album_id;
    return albums[albumId].image_url
  }
  return ""
  }
  componentWillReceiveProps(newProps){
  // if (newProps !== this.props){
  //   this.render();
  // }
  }
  getSongs(){
    let songs = this.state.songIds.map(id => {
  });
  }
  hoverPlayOn(id){
    document.querySelector(".playlist-photo-"+ id).classList.add("show");
  }
  hoverPlayOff(id){
    document.querySelector(".playlist-photo-"+ id).classList.remove("show");
  }
  

  
  render(){
  let currPlaylist = this.props.playlist;
  let {artists, songs, albums} = this.props
  if (!currPlaylist || !songs || !artists || !albums || Object.entries(artists).length === 0 || Object.entries(albums).length === 0 || Object.entries(songs).length === 0 || Object.entries(currPlaylist).length === 0) {
    return (
    <div className="playlist-loading"> LOADING </div>
    )
  }
  let plistSongIdx = -1;
  console.log(this.props);

  // console.log(this.props)
  return (
    <div className="playlist-index-container">
    <div className="playlist-content">
      <div className="playlist-container">
      <div className="playlist-info">
        {albums !== undefined && Object.entries(albums).length !== 0 ? 

          <div className="playlist-image-container" >
            <div className={"playlist-index-photo"}  style={{backgroundImage: "url(" + this.getCoverPhoto(currPlaylist.songIds[0]) + ")"}} onClick={this.changePlaylist}>
              <FontAwesomeIcon  className={"playlist-play-toggle "+ "playlist-photo-" + currPlaylist.id}  icon="play-circle" />

            </div>
          </div> : ""

        // <div className="playlist-cover-image" style={{backgroundImage: "url(" + this.getCoverPhoto(currPlaylist.songIds[0]) + ")"}}> 

        // </div>  : ""
        }
        <div className="playlist-name">
          {currPlaylist.name}
        </div> 
        <div className="playlist-author">
          {currPlaylist.username}
        </div>
        <div className="playlist-play-button" onClick={this.changePlaylist}>
          <div className="btn-green btn">
            PLAY
          </div>
        </div> 
        <div className="playlist-description"> 
        Your favorite music, plus new discoveries you’ll love. Always fresh. Featuring Lost Kings, BAYNK, Gryffin and more


        </div>
      </div>
      <div className="tracklist-container">
        <ol className="tracklist">
        { currPlaylist.songIds.map((id) => {
          let song = this.props.songs[id]; 
          if (song && Object.entries(song).length !== 0){
          return (
          <li key={"song"+id} className="tracklist-row" id={"tracklist-song-"+id} onClick={() => this.changeSong(id)}>
            <div className="tracklist-left">
              <FontAwesomeIcon className="icon" icon="music" />    
            </div>
            <div className="tracklist-middle"> 
            <div className="tracklist-name">{song.name} </div>
            <div className="tracklist-artist">{artists[song.artist_id].name} • {albums[song.album_id].name}</div>
            </div> 
          </li>
          )
          }
        })
        
        
        }
        </ol>
      </div>  
      </div>
    </div>
    </div>
  )
  }
}

export default PlaylistIndexItem;



