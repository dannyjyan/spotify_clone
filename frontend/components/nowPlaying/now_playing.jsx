import React from 'react'
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NowPlaying extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)        
        this.state = {
            playing: false,
            currentSeconds: 0,
            percentage: 0,
            volume: 0.5,
            muted: false,
            volumeHover: false,
            progressHover: false
        }
        // this.props.fetchSongs();
        this.defaultColor = '#b3b3b3';
        this.hoverColor = '#1db954';
        this.onClickProgress = this.onClickProgress.bind(this);
        this.onClickVolume = this.onClickVolume.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.ref = this.ref.bind(this);
        this.toggleVolumeHover = this.toggleVolumeHover.bind(this);
        this.toggleProgressHover = this.toggleProgressHover.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);

    }
    
    componentDidMount(){
        this.props.fetchSongs();
    }


    setDuration(){
        this.setState({
            duration: Math.floor(this.ref.getDuration())
        })
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

    toggleVolumeHover(){
        this.setState({volumeHover: !this.state.volumeHover})
    }
    toggleProgressHover(){
        this.setState({progressHover: !this.state.progressHover})
    }
    

    toggleMute(){
        this.setState({
            muted: !this.state.muted
        })
    }

    togglePlay(){
        this.setState({
            playing: !this.state.playing
        })
    }
    onClickProgress(e){
        let bar = document.getElementById("progressBar");
        let rect = bar.getBoundingClientRect();
        let newPercentage = (e.clientX - rect.left) / (rect.right - rect.left);
        this.player.seekTo(newPercentage)
        this.setState({
            percentage: newPercentage,
            currentSecond: Math.floor(newPercentage * this.state.duration)
            // currentSeconds: Math.floor(newPercentage * this.props.currentSong.duration)
        })
    }
    onClickVolume(e){
        let bar = document.getElementById("volumeBar");
        let rect = bar.getBoundingClientRect();
        let volume = (e.clientX - rect.left) / (rect.right - rect.left);
        this.setState({
            volume: volume,
        })
        console.log(this.getState())
        console.log(this.props)
    }

    updateTime(timeStamp){
        timestamp = Math.floor(timestamp);
		this.setState({ currentTime: timestamp });
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
        let currentSong = this.props.songs


        return (

        <footer className="now-playing-bar-container">
            <div className="now-playing-bar">
                <div className="now-playing-bar-left">
                    <div className="now-playing-artwork" style={{'backgroundImage': 'url('+ this.props.currentSong.artwork+')'}}></div> 
                    <div className="now-playing-track-info">
                        <div className="now-playing-title">{this.props.currentSong.title}</div>
                        <div className="now-playing-artist">{this.props.currentSong.artist}</div>
                    </div>
                </div>
                <div className="now-playing-bar-middle">
                    <div className="np-controls">
                        <div className="np-controls-buttons">
                            <div className="control-button icon-step-forward">
                                <FontAwesomeIcon className="icon" icon="step-forward" />    

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
                            <div className="control-button icon-step-backward">
                                <FontAwesomeIcon className="icon" icon="step-backward" />    
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
                            <div className="progress-end-time">{this.props.currentSong.duration}</div>
                        </div>

                    </div>

                    <div className="react-player">
                        {currentSong ? 
                        <ReactPlayer 
                            ref={this.ref}
                            // url={this.props.currentSong.source}
                            url={this.props.songs.audioUrl}
                            playing={this.state.playing}
                            onProgress={this.onProgress}
                            onReady={this.setDuration}
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

