import React from 'react'
import ReactPlayer from 'react-player';


class NowPlaying extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playStatus: 'pause',
            currentTime: 0
        }
    }
    updateTime(timeStamp){
        timestamp = Math.floor(timestamp);
		this.setState({ currentTime: timestamp });
    }


    render(){
        let currentSong = this.props.currentSong;
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
                            <div className="control-button"></div>
                            <div className="control-button"></div>
                            <div className="control-button"></div>
                        </div>
                        <div className="np-controls-play-bar">
                        </div>

                    </div>

                    <div className="react-player">
                        <ReactPlayer 
                            // url={currentSong.source}
                            playing="false"

                
                        />
                    </div>

                </div>
                <div className="now-playing-bar-right">
                    <h3>Volume Control</h3>
                </div>
            </div>
        </footer>
        )
    }
}
export default NowPlaying;

