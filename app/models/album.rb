class Album < ApplicationRecord
    validates :name,:artist_id, presence: true
    belongs_to :artist
    has_one_attached :cover_image
end
