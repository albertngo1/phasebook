class Api::UsersController < ApplicationController
  def index
    @users = User.search(params[:search])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :user
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :user
  end

  def update
    @user = User.find(params[:id])
    if @user.id != current_user.id
      render json: ["Cannot edit other people's information"], status: 401
    else
      if @user.update(intro_params)
        render :user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name,
																 :last_name, :email, :gender, :birth_day,
																 :birth_month, :birth_year)
  end

  def intro_params
		params.require(:user).permit(:education, :current_city, :hometown,
															   :relationship, :introduction,:profile_pic, :cover_page)
  end
end
