export const fetchSong = id => (
    $.ajax({
        method: "GET",
        url: `api/songs/${id}`
    })
)
export const fetchSongs = () => (
    $.ajax({
        method: "GET",
        url: `api/songs/`
    })
)
export const fetchAlbums = () => (
    $.ajax({
        method: "GET",
        url: `api/albums`
    })
)