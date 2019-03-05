class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true 
    belongs_to :user
    has_many :followed_playlists
    has_many :playlistSongs
    has_many :songs,
        through: :playlistSongs,
        source: :song
    has_many :followers,
        through: :followed_playlists,
        source: :user
    
end
