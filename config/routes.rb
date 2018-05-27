Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update] do
      resources :friendships, only: [:index]
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :friendships, only: [:create, :update, :destroy] do
      get :friend_requests, on: :collection
    end
    resources :likes, only: [:create, :destroy]

    resources :conversations, only: [:index, :create] do
      resources :messages, only: [:create, :destroy]
    end
  end
end
