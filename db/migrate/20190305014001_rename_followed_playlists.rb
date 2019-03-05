class RenameFollowedPlaylists < ActiveRecord::Migration[5.2]
  def change
    rename_table :followedPlaylists, :followed_playlists
    rename_table :playlistSongs, :playlist_songs
  end
end
