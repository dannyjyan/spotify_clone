class PlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistSongs do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end 
    add_index :playlistSongs, [:playlist_id, :song_id], unique: true
  end
end
