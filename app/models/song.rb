class Song < ApplicationRecord
    belongs_to :artist
    belongs_to :album
    # has_one_attached :audio
    has_many :playlists, 
        through: :playlist, 
        source: :playlistSongs
end
