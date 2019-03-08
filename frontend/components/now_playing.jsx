import React from 'react'



export default class NowPlaying extends React.Component{
    render(){
        return (
        <footer className="now-playing-bar-container">
            <div className="now-playing-bar">
                <div className="now-playing-bar-left">
                    <h3>Song Name</h3>
                </div>
                <div className="now-playing-bar-middle">
                    <audio
                        controls
                        
                    />

                </div>
                <div className="now-playing-bar-right">
                    <h3>Volume Control</h3>
                </div>
            </div>
        </footer>
        )
    }

}

