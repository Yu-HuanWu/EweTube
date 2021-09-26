class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ["Wrong Credentials!"], status: 401
    else
      login!(@user)
      render "api/users/show"
    end
  end
  
  def destroy
    if current_user
      logout!
      render json: { message: 'Logout successful.' }
    else
      render json: { error: "You must Login first."}, status: 404
    end
  end
end
