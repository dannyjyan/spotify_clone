import React from 'react';



export const PlaylistIndexItem = ({playlist}) => {

    return(
        <div key={playlist.id}>{playlist.name}
            
        </div>
    )
}



