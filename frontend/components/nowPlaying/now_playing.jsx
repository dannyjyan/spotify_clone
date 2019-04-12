import React from 'react'
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NowPlaying extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currSongIdx: 0,
      playing: false,
      currentSeconds: 0,
      percentage: 0,
      volume: 0.5,
      muted: false,
      volumeHover: false,
      progressHover: false
    }
  // currentSong: {
  //   title: "We Were Young",
  //   artist: "Odesza", 
  //   album: "Summer's Gone",
  //   year: 2012,
  //   artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
  //   duration: 192,
  //   source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
  // }
  
    this.defaultColor = '#b3b3b3';
    this.isEmpty = this.isEmpty.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.hoverColor = '#1db954';
    this.onClickProgress = this.onClickProgress.bind(this);
    this.onClickVolume = this.onClickVolume.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.ref = this.ref.bind(this);
    this.toggleVolumeHover = this.toggleVolumeHover.bind(this);
    this.toggleProgressHover = this.toggleProgressHover.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.onNextSong = this.onNextSong.bind(this);
    this.onPrevSong = this.onPrevSong.bind(this);
  }
  
  componentDidUpdate(newProps){

    if (newProps.playback.currSongIdx !== this.props.playback.currSongIdx){
      // console.log(newProps.playback, this.props.playback)
      // this.render();
    }
    // let currSongIdx = this.state.currSongIdx;
    // let newSongIdx = newProps.playback.songIdx
    // if(newSongIdx && currSongIdx !== newSongIdx){
    //   if(newSongIdx >= newProps.playback.playbackSong.length){
    //     newSongIdx = 0;
    //   }
    // } 
    // this.setState({currSongIdx: newSongIdx});
  }

  isEmpty(obj){
    if (!obj) return true;
    return Object.keys(obj).length === 0
  }
  onNextSong(){
    // this.player.seekTo(0);
    // if (this.state.currSongIdx < this.props.playback.playbackSongs.length - 1){
    if (this.props.playback.currSongIdx < this.props.playback.playbackSongs.length - 1){
      this.props.receiveCurrentSong(this.props.playback.currSongIdx + 1)
      this.setState({
        // currSongIdx: this.state.currSongIdx + 1,
        currentSeconds: 0,
        percentage: 0,
        playing: true 
      })
  } else {
    this.props.receiveCurrentSong(0)
    this.setState({
      // currSongIdx: 0,
      currentSeconds: 0,
      percentage: 0,
      playing: true 

    })
  }
  }
  onPrevSong(){
    this.player.seekTo(0);
    // if (this.state.currSongIdx !== 0){
    if (this.props.playback.currSongIdx !== 0) {
      this.props.receiveCurrentSong(this.props.playback.currSongIdx - 1)
      this.setState({
        // currSongIdx: this.state.currSongIdx - 1,
        currentSeconds: 0,
        percentage: 0,
        playing: true 
      });
    } else {
      this.setState({ 
        currentSeconds: 0,
        percentage: 0,
        playing: true 
      })
    }
  }
  onClickProgress(e){
    let bar = document.getElementById("progressBar");
    let rect = bar.getBoundingClientRect();
    let newPercentage = (e.clientX - rect.left) / (rect.right - rect.left);
    this.player.seekTo(newPercentage)
    this.setState({
      percentage: newPercentage,
      currentSeconds: Math.floor(newPercentage * this.state.duration)
    // currentSeconds: Math.floor(newPercentage * this.props.currentSong.duration)
    })
  }
  onClickVolume(e){
    // TEST STUFF
    // this.props.receiveCurrentPlaylist(this.props.playlists[2]);
    let bar = document.getElementById("volumeBar");
    let rect = bar.getBoundingClientRect();
    let volume = (e.clientX - rect.left) / (rect.right - rect.left);
    // this.setState({
    //   volume: volume,
    // })
  // console.log(this.state)
    // console.log(this.props)
  }

  onProgress(progress){
    this.setState({
      currentSeconds: Math.floor(progress.playedSeconds),
      percentage: progress.played
    })
  }

  ref(player){
    this.player = player;
  }

  setDuration(){
    this.setState({
      duration: Math.floor(this.player.getDuration())
    })
  }

  toggleVolumeHover(){
    this.setState({volumeHover: !this.state.volumeHover})
  }
  toggleProgressHover(){
    this.setState({progressHover: !this.state.progressHover})
  }

  toggleMute(){
    // console.log(this.props)
    this.setState({
      muted: !this.state.muted
    })
  }

  togglePlay(){
    this.setState({
      playing: !this.state.playing
    })
  }

  updateTime(timeStamp){
    timestamp = Math.floor(timeStamp);
      this.setState({ currentTime: timestamp });
  }

  getImageUrl(songId){
    let {songs, albums} = this.props;
    // console.log(songs, albums)
    if (this.isEmpty(songs) || this.isEmpty(albums)) return ""
    let albumId = songs[songId].album_id;
    return albums[albumId].imageUrl
  }


  render(){
    
    let volume = this.state.volume;
    if (this.state.muted) volume = 0;
      let progressColor = {backgroundColor: this.defaultColor};
    if (this.state.progressHover) {
      progressColor = {backgroundColor: this.hoverColor};
    } 
    let volumeColor = {backgroundColor: this.defaultColor};
    if (this.state.volumeHover) {
      volumeColor = {backgroundColor: this.hoverColor};
    } 
    let currentSong;
    if (!this.isEmpty(this.props.songs) && !this.isEmpty(this.props.playback.playbackSongs) ){
      // currentSong = this.props.songs[this.props.playback.playbackSongs[this.state.currSongIdx]];
      currentSong = this.props.songs[this.props.playback.playbackSongs[this.props.playback.currSongIdx]];
    }
  
  // if (!currentSong) {
  //   return <div></div>
  // }
  // if (this.state.muted === true) {
  //   debugger;
  // }
  return (

  <footer className="now-playing-bar-container">
    <div className="now-playing-bar">
    <div className="now-playing-bar-left">
      {!this.isEmpty(currentSong) ? 
      <div className="now-playing-artwork" style={{'backgroundImage': 'url('+ this.getImageUrl(currentSong.id)+')'}}></div> 
      : <div></div>}
      <div className="now-playing-track-info">
      <div className="now-playing-title">{!this.isEmpty(currentSong) ? currentSong.name : ""}</div>
      <div className="now-playing-artist">{!this.isEmpty(this.props.artists) && !this.isEmpty(currentSong) ? this.props.artists[currentSong.artist_id].name : ""}</div>
      </div>
    </div>
    <div className="now-playing-bar-middle">
      <div className="np-controls">
      <div className="np-controls-buttons">
         <div className="control-button icon-step-backward" onClick={this.onPrevSong}>
        <FontAwesomeIcon className="icon" icon="step-backward" />    
        </div>

        {this.state.playing ? 
        <div className="control-button control-button-circled play-button icon-pause" onClick={this.togglePlay}>
          <FontAwesomeIcon className="icon" icon="pause" />    
        </div>
        :
        <div className="control-button control-button-circled play-button icon-play " onClick={this.togglePlay} >
          <FontAwesomeIcon className="icon" icon="play" />    
        </div>
        }   
        <div className="control-button icon-step-forward" onClick={this.onNextSong}>
          <FontAwesomeIcon className="icon" icon="step-forward" />    
        </div>

      </div>
      <div className="playback-bar">
        <div className="progress-current-time">{this.state.currentSeconds}</div>
        <div className="progress-bar"  id="progressBar" onClick={this.onClickProgress} onMouseEnter={this.toggleProgressHover} onMouseLeave={this.toggleProgressHover}>
        <div className="progress-bar-bg" >
          <div className="progress-bar-wrapper" > 
          <div className="progress-bar-moving" style={Object.assign({}, {'transform': 'translateX(-'+ (100 - this.state.percentage*100)+'%)'}, progressColor)} >

          </div>
          {/* <div className="progress-bar-button">
          </div> */}

          </div>
        </div>
        </div>
        <div className="progress-end-time">{this.state.duration ? this.state.duration : ""}</div>
      </div>

      </div>

      <div className="react-player">
      {currentSong ? 
      <ReactPlayer 
        ref={this.ref}
        // url={this.props.songs.audioUrl}
        url={currentSong.audioUrl}
        playing={this.state.playing}
        onProgress={this.onProgress}
        onReady={this.setDuration}
        onEnded={this.onNextSong}
        volume={volume}
      /> : ""
      }
      </div>

    </div>
    <div className="now-playing-bar-right">
      <div className="volume-controls">
      {this.state.muted ?  
        <div className="control-button play-button icon-volume-mute" onClick={this.toggleMute}>
        <FontAwesomeIcon className="icon" icon="volume-mute" />    
        </div>
        :
        <div className="control-button play-button icon-volume-up" onClick={this.toggleMute}>
        <FontAwesomeIcon className="icon" icon="volume-up" />    
        </div>
      }


      <div className="progress-bar" id="volumeBar" onMouseEnter={this.toggleVolumeHover} onMouseLeave={this.toggleVolumeHover} onClick={this.onClickVolume}>
        <div className="progress-bar-bg" >
        <div className="progress-bar-wrapper">
          <div className="progress-bar-moving" style={ Object.assign({}, {'transform': 'translateX(-'+ (100-volume*100) +'%)' }, volumeColor)} > 
          </div>

        </div>
        </div>
      </div>
      </div>

      
    </div>
    </div>
  </footer>
  )
  }
}
export default NowPlaying;

