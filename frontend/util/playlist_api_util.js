
export const fetchPlaylists = () =>  (
    $.ajax({
        method: "GET",
        url: "api/playlists",
    })
)
export const fetchPlaylist = id => (
    $.ajax({
        method: "GET",
        url: `api/playlists/${id}`,
    })
)
export const deletePlaylist = id => (
    $.ajax({
        method: "DELETE",
        url: `api/playlists/${id}`
    })
)
//may need more params
export const createPlaylist = playlist => (
    $.ajax({
        method: 'POST',
        url: `api/playlists`,
        data: {playlist}
    })
)
