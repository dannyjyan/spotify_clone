json.extract! album, :id, :name, :artist_id
json.imageUrl url_for(album.cover_image)