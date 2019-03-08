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
                        src = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8b7372445efa1432bab09c73fd2a1a5eb5845f15/Baha%20Men%20-%20Who%20Let%20The%20Dogs%20Out.mp3"
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

