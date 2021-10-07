Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users
    resources :videos do
      resources :comments
    end
    resources :likes
    resource :session, only: [:create, :destroy]
    patch '/videos/:id/views', to: 'videos#current_views'
  end
end
