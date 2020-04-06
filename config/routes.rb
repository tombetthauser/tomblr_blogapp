Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    resources :blogs, only: [:create, :destroy, :show, :index, :update]
    resources :posts, only: [:create, :destroy, :show, :index, :update]
    resources :follows, only: [:create, :destroy, :show, :index, :update] do
      resource :user, only: [:show]
    end
    resource :user, only: [:create]
    # resource :user, only: [:create] do
    # namespace :follows, defaults: {format: :json} do
      # resources :follows, only: [:index]
    # end
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy]
  end

end
