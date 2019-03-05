class FollowedPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :followedPlaylists do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end 
    add_index :followedPlaylists, [:user_id, :playlist_id], unique: true
  end
end
