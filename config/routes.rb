Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    resources :blogs, only: [:create, :destroy, :show, :index, :update]
    resources :posts, only: [:create, :destroy, :show, :index, :update]
    resources :follows, only: [:create, :destroy, :show, :index, :update]
    resource :user, only: [:create]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy]
  end

end
