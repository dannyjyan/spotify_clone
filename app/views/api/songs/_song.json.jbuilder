json.extract! song, :id, :name, :year, :artist_id, :album_id
json.audioUrl url_for(song.audio) 
