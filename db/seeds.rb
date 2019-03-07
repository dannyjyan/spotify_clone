# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Users
corgi = User.create(username: "Corgi", email: "corgi@corgi.com", password: "password" , confirmEmail: "corgi@corgi.com")
danny = User.create(username: "Danny", email: "danny@danny.com", password: "dannyjyan", confirmEmail: "danny@danny.com")

#Playlists
doggy_tunes = Playlist.create(name: "Doggy Tunes", user_id: corgi.id)
best_ariana = Playlist.create(name: "Best of Ariana Grande", user_id: corgi.id)
#Artists
florence = Artist.create(name: "Florence + the Machine")
ariana = Artist.create(name: "Ariana Grande")
baha = Artist.create(name: "Baha Men")
maggie = Artist.create(name: "Maggie")
snoop = Artist.create(name: "Snoop Dogg")
#Albums
lungs = Album.create(name: "Lungs", artist_id: florence.id)
dogs = Album.create(name: "Who Let the Dogs Out", artist_id: baha.id)
thank_alb = Album.create(name: "thank u, next", artist_id: ariana.id)
now_that = Album.create(name: "Now That The Light Is Fading", artist_id: maggie.id)
young_alb = Album.create(name: "Young and Wild and Free", artist_id: snoop.id)
r_g = Album.create(name: "R&G (Rhythm and Gangsta): The Masterpiece", artist_id: snoop.id)

#Songs 
dog_days = Song.create(name: "Dog Days Are Over", year: 2009, artist_id: florence.id, album_id: lungs.id)
who_let = Song.create(name: "Who Let The Dogs Out", year: 2000, artist_id: baha.id, album_id: dogs.id)
dog_years = Song.create(name: "Dog Years", year: 2017, artist_id: maggie.id, album_id: now_that.id)
young = Song.create(name: "Young, Wild, and Free", year: 2011, artist_id: snoop.id, album_id: young_alb.id)
drop_it = Song.create(name: "Drop It Like It's Hot", year: 2004, artist_id: snoop.id, album_id: r_g.id)

seven = Song.create(name: "7 rings", year: 2019, artist_id: ariana.id, album_id: thank_alb.id)
thank_u = Song.create(name: "thank u, next", year: 2019, artist_id: ariana.id, album_id: thank_alb.id)
bad_idea = Song.create(name: "bad idea", year: 2019, artist_id: ariana.id, album_id: thank_alb.id)

#Playlist_Songs
PlaylistSong.create(song_id: florence.id, playlist_id: doggy_tunes.id)  
PlaylistSong.create(song_id: who_let.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: dog_years.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: young.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: drop_it.id, playlist_id: doggy_tunes.id) 

PlaylistSong.create(song_id: seven.id, playlist_id: best_ariana.id)
PlaylistSong.create(song_id: thank_u.id, playlist_id: best_ariana.id)
PlaylistSong.create(song_id: bad_idea.id, playlist_id: best_ariana.id)




