class ChangePlaylists < ActiveRecord::Migration[5.2]
  def change
      drop_table :playlists

      create_table :playlists do |t|
        t.string :name, null: false
        t.integer :user_id, null: false
        t.timestamps
      end
      add_index :playlists, [:user_id, :name], unique: true
  end
end
