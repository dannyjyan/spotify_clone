class Api::PlaylistsController < ApplicationController
    before_action :require_logged_in
    def index
      @playlists = Playlist.all
    end

    def create
      @playlist = Playlist.create!(playlist_params)
      render :show
    end

    def show 
      @playlist = Playlist.find(params[:id])
    end

    def destroy
      @user = current_user
      @playlist = Playlist.find(params[:id])
      if @user.id == @playlist.user_id 
        @playlist.destroy 
        render "api/users/show"
      else 
        render json: ["Not your playlist"], status: 401
      end 
    end

    private 
    def playlist_params
      params.require(:playlist).permit(:name, :user_id)
    end 
end
