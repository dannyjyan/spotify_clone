class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all 
        render :index 
    end 
end
