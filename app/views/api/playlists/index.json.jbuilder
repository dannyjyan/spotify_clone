@playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'playlist', playlist: playlist
      json.songIds playlist.songs.pluck(:id)
    end
  end
  