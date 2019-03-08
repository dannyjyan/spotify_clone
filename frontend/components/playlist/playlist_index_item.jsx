import React from 'react';
import {Link} from 'react-router-dom'

export const PlaylistIndexItem = ({songs, playlist, coverUrl}) => {
    return(
        <div className="playlist-index-item" key={playlist.id} style={{backgroundImage: "url(" + coverUrl + ")"}}>
            <div className="media-item">
                    {playlist.name}
            </div> 
        </div>
    )
}



