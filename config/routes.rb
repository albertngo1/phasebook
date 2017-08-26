Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
    resources :friendships, only: [:index, :create, :show, :update, :destroy]
  end

end
