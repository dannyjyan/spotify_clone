class FollowedPlaylist < ApplicationRecord
    validates :user_id, :playlist_id, presence: true
    belongs_to :user 
    belongs_to :playlist
end