class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid credentials, please try again"], status: 422
    end
  end

  def destroy
    if !current_user
      render json: ["No user is logged in."], status: 404
    else
      @user = current_user
      logout
      render json: {}
    end
  end
end
