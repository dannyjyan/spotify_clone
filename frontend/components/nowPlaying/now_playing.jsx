import React from 'react'
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NowPlaying extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            playing: false,
            currentSeconds: 0,
            percentage: 0,
            volume: 0.5,
            muted: false
        }
        this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        
    }
    onDuration(duration){
        // this.setState({
        //     duration: Math.floor(duration)
        // })
    }
    onProgress(progress){
        this.setState({
            currentSeconds: Math.floor(progress.playedSeconds),
            percentage: progress.played
        })
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
    

    updateTime(timeStamp){
        timestamp = Math.floor(timestamp);
		this.setState({ currentTime: timestamp });
    }

    render(){
        
        let volume = (1 - this.state.volume);
        if (this.state.muted) volume = 0;

        

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
                            <div className="control-button">
                            </div>
                            <div className="control-button control-button-circled play-button icon-play" onClick={this.togglePlay}>
                                <FontAwesomeIcon className="icon" icon="play" />    
                            </div>
                            <div className="control-button control-button-circled play-button icon-pause" onClick={this.togglePlay}>
                                <FontAwesomeIcon className="icon" icon="pause" />    
                            </div>

                            <div className="control-button"></div>
                        </div>
                        <div className="playback-bar">
                            <div className="progress-current-time">{this.state.currentSeconds}</div>
                            <div className="progress-bar">
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-wrapper">
                                        <div className="progress-bar-moving" style={{'transform': 'translateX(-'+ (100 - this.state.percentage*100)+'%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-end-time">{this.props.currentSong.duration}</div>
                        </div>

                    </div>

                    <div className="react-player">
                        <ReactPlayer 
                            url={this.props.currentSong.source}
                            playing={this.state.playing}
                            onProgress={this.onProgress}
                            onDuration={this.onDuration}
                            volume={volume}
                        />
                    </div>

                </div>
                <div className="now-playing-bar-right">
                    <div className="volume-controls">
                        <div className="control-button play-button icon-volume-up" onClick={this.toggleMute}>
                            <FontAwesomeIcon className="icon" icon="volume-up" />    
                        </div>
                        <div className="control-button play-button icon-volume-mute" onClick={this.toggleMute}>
                            <FontAwesomeIcon className="icon" icon="volume-mute" />    
                        </div>



                        <div className="progress-bar">
                            <div className="progress-bar-bg">
                                <div className="progress-bar-wrapper">
                                    <div className="progress-bar-moving" style={{'transform': 'translateX(-'+ (100-volume*100) +'%)'}} > </div>

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

