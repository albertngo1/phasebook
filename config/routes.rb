Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update] do
      resources :friendships, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
    resources :friendships, only: [:create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    get 'friendships/friendrequests', :to => 'friendships#current_user_friend_requests'


    resources :conversations, only: [:index, :create] do
      resources :messages, only: [:index, :create, :destroy]
    end





  end

end
