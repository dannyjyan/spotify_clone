export const fetchSong = id => (
    $.ajax({
        method: "GET",
        url: `api/songs/${id}`
    })
)
export const fetchSongs = id => (
    $.ajax({
        method: "GET",
        url: `api/songs/`
    })

)