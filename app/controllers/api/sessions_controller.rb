class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      if params[:user][:password].empty? && params[:user][:username].empty?
        render json: ["Username and Password cannot be empty"], status: 401
      elsif params[:user][:username].empty?
        render json: ["Username can't be empty"], status: 401
      elsif params[:user][:password].empty?
        render json: ["Password can't be empty"], status: 401
      else
        render json: ["Wrong credentials!"], status: 401
      end
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
