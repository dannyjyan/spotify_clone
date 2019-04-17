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
spotify = User.create(username: "Spotify", email: "spotify@spotify.com", password: "spotifymaster", confirmEmail: "spotify@spotify.com")

#Playlists
doggy_tunes = Playlist.create(name: "Doggy Tunes", user_id: corgi.id)
best_ariana = Playlist.create(name: "Best of Ariana Grande", user_id: corgi.id)
who_let_pl = Playlist.create(name: "Who Let the Dogs Out", user_id: corgi.id)
young_wild_pl = Playlist.create(name: "Young and Wild and Free", user_id: corgi.id)
drop_it = Playlist.create(name: "R&G (Rhythm and Gangsta): The Masterpiece", user_id: corgi.id)
lungs_pl = Playlist.create(name: "Lungs", user_id: danny.id)
awake = Playlist.create(name: "Awake", user_id: corgi.id)
chill_tracks = Playlist.create(name: "Chill Tracks", user_id: spotify.id)

#Artists
florence = Artist.create(name: "Florence + the Machine")
ariana = Artist.create(name: "Ariana Grande")
baha = Artist.create(name: "Baha Men")
maggie = Artist.create(name: "Maggie")
snoop = Artist.create(name: "Snoop Dogg")
illenium = Artist.create(name: "Illenium")
kasbo = Artist.create(name: "Kasbo")
san_holo = Artist.create(name: "San Holo")
said_the_sky = Artist.create(name: "Said the Sky")


#Albums
lungs = Album.create(name: "Lungs", artist_id: florence.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/lungs.jpeg")
dogs = Album.create(name: "Who Let the Dogs Out", artist_id: baha.id,image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/who-let-dogs.jpeg" )
thank_alb = Album.create(name: "thank u, next", artist_id: ariana.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/thank-u-next.jpeg")
now_that = Album.create(name: "Now That The Light Is Fading", artist_id: maggie.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/dog-years.jpeg")
young_alb = Album.create(name: "Young and Wild and Free", artist_id: snoop.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/young-wild-free.jpeg")
r_g = Album.create(name: "R&G (Rhythm and Gangsta): The Masterpiece", artist_id: snoop.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/drop-it-like-its-hot.jpeg")
awake = Album.create(name: "Awake", artist_id: illenium.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/awake.jpeg")
we_rise_alb = Album.create(name: "We Rise", artist_id: san_holo.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/we-rise.jpeg")
light_alb = Album.create(name: "Light", artist_id: san_holo.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/light.jpeg")
places_we_dont = Album.create(name: "Places We Don't Know", artist_id: kasbo.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/places-we-dont-know.jpeg")
wide_eyed = Album.create(name: "Wide Eyed", artist_id: said_the_sky.id, image_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/images/wide-eyed.jpeg")

#Songs 
dog_days = Song.create(name: "Dog Days Are Over", year: 2009, artist_id: florence.id, album_id: lungs.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/FlorenceandTheMachine-DogDaysAreOver.mp3")
who_let = Song.create(name: "Who Let The Dogs Out", year: 2000, artist_id: baha.id, album_id: dogs.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Baha+Men+-+Who+Let+The+Dogs+Out.mp3")
dog_years = Song.create(name: "Dog Years", year: 2017, artist_id: maggie.id, album_id: now_that.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Maggie+Rogers+-+Dog+Years.mp3")
young = Song.create(name: "Young, Wild, and Free", year: 2011, artist_id: snoop.id, album_id: young_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Snoop+Dogg+-+Young%2C+Wild+and+Free.mp3")
drop_it = Song.create(name: "Drop It Like It's Hot", year: 2004, artist_id: snoop.id, album_id: r_g.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Snoop+Dogg++-+Drop+It+Like+It's+Hot.mp3")
seven = Song.create(name: "7 rings", year: 2019, artist_id: ariana.id, album_id: thank_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+7+rings.mp3")
thank_u = Song.create(name: "thank u, next", year: 2019, artist_id: ariana.id, album_id: thank_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+thank+u%2C+next.mp3")
bad_idea = Song.create(name: "bad idea", year: 2019, artist_id: ariana.id, album_id: thank_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+bad+idea.mp3")
needed_you = Song.create(name: "Needed You", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-needed-you.mp3")
crawl_outta_love = Song.create(name: "Crawl Outta Love", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Crawl-Outta-Love.mp3")
no_time_like_now = Song.create(name: "No Time Like Now", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-No-Time-Like-Now.mp3")
free_fall = Song.create(name: "Free Fall", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Free-Fall.mp3")
whered_u_go = Song.create(name: "Where'd u go", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Where'd-U-Go.mp3")
fractures = Song.create(name: "Fractures", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Fractures.mp3")
leaving = Song.create(name: "Leaving", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Leaving.mp3")
lost = Song.create(name: "Lost", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Lost.mp3")
sound_of_walking = Song.create(name: "Sound of Walking Away", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/illenium-sound-of-walking-away.mp3")
taking_me_higher = Song.create(name: "Taking Me Higher", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Taking-Me-Higher.mp3")
feel_good = Song.create(name: "Feel Good", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Feel-Good.mp3")
beautiful_creatures = Song.create(name: "Beautiful Creatures (feat. MAX)", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Beautiful-Creatures.mp3")
let_you_go = Song.create(name: "Let You Go", year: 2017, artist_id: illenium.id, album_id: awake.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Let-You-Go.mp3")
all_i_got = Song.create(name: "All I Got", year: 2017, artist_id: said_the_sky.id, album_id: wide_eyed.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/SaidTheSky-All-I-Got.mp3")
light = Song.create(name: "Light", year: 2017, artist_id: san_holo.id, album_id: light_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/SanHolo-Light.mp3");
about_you = Song.create(name: "About You", year: 2018, artist_id: kasbo.id, album_id: places_we_dont.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Kasbo-About-You.mp3")
we_rise = Song.create(name: "We Rise", year: 2015, artist_id: san_holo.id, album_id: we_rise_alb.id, audio_url: "https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/SanHolo-We-Rise.mp3");


#Playlist_Songs
PlaylistSong.create(song_id: dog_days.id, playlist_id: doggy_tunes.id)  
PlaylistSong.create(song_id: who_let.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: dog_years.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: young.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: drop_it.id, playlist_id: doggy_tunes.id) 
PlaylistSong.create(song_id: seven.id, playlist_id: best_ariana.id)
PlaylistSong.create(song_id: who_let.id, playlist_id: who_let_pl.id)
PlaylistSong.create(song_id: young.id, playlist_id: young_wild_pl.id)
PlaylistSong.create(song_id: drop_it.id, playlist_id: drop_it.id)
PlaylistSong.create(song_id: dog_years.id, playlist_id: lungs_pl.id)
## Illenium
PlaylistSong.create(song_id: needed_you.id, playlist_id: awake.id)
PlaylistSong.create(song_id: crawl_outta_love.id, playlist_id: awake.id)
PlaylistSong.create(song_id: no_time_like_now.id, playlist_id: awake.id)
PlaylistSong.create(song_id: free_fall.id, playlist_id: awake.id)
PlaylistSong.create(song_id: whered_u_go.id, playlist_id: awake.id)
PlaylistSong.create(song_id: fractures.id, playlist_id: awake.id)
PlaylistSong.create(song_id: leaving.id, playlist_id: awake.id)
PlaylistSong.create(song_id: lost.id, playlist_id: awake.id)
PlaylistSong.create(song_id: sound_of_walking.id, playlist_id: awake.id)
PlaylistSong.create(song_id: taking_me_higher.id, playlist_id: awake.id)
PlaylistSong.create(song_id: feel_good.id, playlist_id: awake.id)
PlaylistSong.create(song_id: beautiful_creatures.id, playlist_id: awake.id)
PlaylistSong.create(song_id: let_you_go.id, playlist_id: awake.id)
# 
PlaylistSong.create(song_id: all_i_got.id, playlist_id: chill_tracks.id);
PlaylistSong.create(song_id: about_you.id, playlist_id: chill_tracks.id);
PlaylistSong.create(song_id: we_rise.id, playlist_id: chill_tracks.id);
PlaylistSong.create(song_id: light.id, playlist_id: chill_tracks.id);



#Add audio to songs
# dog_days.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/FlorenceandTheMachine-DogDaysAreOver.mp3"), filename: "FlorenceandTheMachine-DogDaysAreOver.mp3")
# who_let.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Baha+Men+-+Who+Let+The+Dogs+Out.mp3"), filename: "Baha+Men+-+Who+Let+The+Dogs+Out.mp3")
# dog_years.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Maggie+Rogers+-+Dog+Years.mp3"), filename: "Maggie+Rogers+-+Dog+Years.mp3")
# young.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Snoop+Dogg+-+Young%2C+Wild+and+Free.mp3"), filename: "Snoop+Dogg+-+Young%2C+Wild+and+Free.mp3")
# drop_it.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Snoop+Dogg+-+Young%2C+Wild+and+Free.mp3"), filename: "Snoop+Dogg+-+Young%2C+Wild+and+Free.mp3")
# seven.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+7+rings.mp3"), filename: "Ariana+Grande+-+7+rings.mp3")
# thank_u.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+thank+u%2C+next.mp3"), filename: "Ariana+Grande+-+thank+u%2C+next.mp3")
# bad_idea.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Ariana+Grande+-+bad+idea.mp3"), filename: "Ariana+Grande+-+bad+idea.mp3")
## illenium
# needed_you.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-needed-you.mp3"), filename: "Illenium-needed-you.mp3") 
# crawl_outta_love.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Crawl-Outta-Love.mp3"), filename: "Illenium-Crawl-Outta-Love.mp3")
# no_time_like_now.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-No-Time-Like-Now.mp3"),filename: "Illenium-No-Time-Like-Now.mp3") 
# free_fall.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Free-Fall.mp3"),filename: "Illenium-Free-Fall.mp3") 
# whered_u_go.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Where'd-U-Go.mp3"),filename: "Illenium-Where'd-U-Go.mp3")
# fractures.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Fractures.mp3"),filename: "Illenium-Fractures.mp3") 
# leaving.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Leaving.mp3"),filename: "Illenium-Leaving.mp3") 
# lost.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Lost.mp3"),filename: "Illenium-Lost.mp3") 
# sound_of_walking.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/illenium-sound-of-walking-away.mp3"),filename: "Illenium-sound-of-walking-away.mp3")
# taking_me_higher.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Taking-Me-Higher.mp3"),filename: "Illenium-Taking-Me-Higher.mp3") 
# feel_good.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Feel-Good.mp3"),filename: "Illenium-Feel-Good.mp3")
# beautiful_creatures.audio.attach(io: File.open("https://s3-us-west-1.amazonaws.com/chillify-seeds/audio/Illenium-Beautiful-Creatures.mp3"),filename: "Illenium-Beautiful-Creatures.mp3")
# let_you_go.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Illenium-Let-You-Go.mp3"),filename: "Illenium-Let-You-Go.mp3") 

# all_i_got.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/SaidTheSky-All-I-Got.mp3"),filename: "SaidTheSky-All-I-Got.mp3")
# light.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/SanHolo-Light.mp3"),filename: "SanHolo-Light.mp3")
# about_you.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/Kasbo-About-You.mp3"),filename: "Kasbo-About-You.mp3")
# we_rise.audio.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/audio/SanHolo-We-Rise.mp3"),filename: "SanHolo-We-Rise.mp3")








#Add images to Albums
# lungs.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/lungs.jpeg"), filename: "lungs.jpeg")
# dogs.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/who-let-dogs.jpeg"), filename: "who-let-dogs.jpeg")
# thank_alb.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/thank-u-next.jpeg"), filename: "thank-u-next.jpeg")
# now_that.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/dog-years.jpeg"), filename: "dog-years.jpeg")
# young_alb.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/young-wild-free.jpeg"), filename: "young-wild-free.jpeg")
# r_g.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/drop-it-like-its-hot.jpeg"), filename: "drop-it-like-its-hot.jpeg")
# awake.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/awake.jpeg"),filename: "awake.jpeg")
# we_rise_alb.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/we-rise.jpeg"),filename: "we-rise.jpeg")
# light_alb.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/light.jpeg"),filename: "light.jpeg")
# places_we_dont.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/places-we-dont-know.jpeg"),filename: "places-we-dont-know.jpeg")
# wide_eyed.cover_image.attach(io: File.open("/Users/Danny/Documents/app_academy/Projects/full_stack/img/wide-eyed.jpeg"),filename: "wide-eyed.jpeg")






