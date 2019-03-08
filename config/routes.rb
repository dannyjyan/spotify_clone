Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index]
    resources :songs, only: [:show, :index]
    resources :users, only: [:create]
    resource :session, only: [:destroy, :create]
    resources :playlists, only: [:create, :destroy, :show, :index]
    resources :playlist_songs, only: [:create, :destroy, :show, :index]
  end  

  root to:'static_pages#root'
end
