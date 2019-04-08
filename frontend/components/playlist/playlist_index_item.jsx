import React from 'react';
import {Link} from 'react-router-dom'

class PlaylistIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentSongId: 0
    }
    this.getSongs = this.getSongs.bind(this);
  }

  componentWillMount(){
    this.props.fetchArtists()
    this.props.fetchAlbums()
    this.props.fetchPlaylists(this.props.currentUser.id).then(() => this.render())
          // let playlist = this.props.playlists[this.props.match.params.playlistId]
          // this.setState({
          //   playlist
    // });
  }
  getCoverPhoto(songId){
    let {songs, albums} = this.props;

    if (songs !== undefined && albums !== undefined){
      let albumId = songs[songId].album_id;
      return albums[albumId].imageUrl
    }
    return ""
  }

  getSongs(){
    let songs = this.state.songIds.map(id => {
    });
  }
  
  render(){
    let currPlaylist = this.props.playlist;
    let {artists} = this.props
    let {albums} = this.props
    if (!currPlaylist) {
      return (
        <div className="playlist-loading"> </div>
      )
    }
    return (
      <div className="playlist-index-item-container">
        <div className="playlist-info">
          <div className=""> 

          </div>  
          {currPlaylist.name}
        </div>
        <div className="playlist-songs">
          {currPlaylist.songIds.map((id) => {
            console.log(this.props.songs[id])
            let song = this.props.songs[id]; 
            if (song){
              return (
              <div className="song-index-item">
                <div className="song-index-name"> {song.name} 

                
                </div> 
                <div className="song-index-artist">{artists[song.artist_id].name} • {albums[song.album_id].name} </div>
              </div>
              )
            }
          })
          
        
          }
        </div>  

        
      </div>
    )
  }
}

export default PlaylistIndexItem;



