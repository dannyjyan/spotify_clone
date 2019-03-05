class Album < ApplicationRecord
    validates :name,:artist_id, presence: true
    belongs_to :artist
end
