class Artist < ApplicationRecord
    # todo
    validates :name, presence: true, uniqueness: true
    has_many :albums
end
