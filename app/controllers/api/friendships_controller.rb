class Api::FriendshipsController < ApplicationController

  # friendship statuses => pending, active

  def index
    @friendships = User.find(params[:user_id]).active_friends
    @user = User.find(params[:user_id])
    render 'api/friendships/index'
  end

  def current_user_friend_requests
    @friend_requests = Friendship
      .where("user2_id = ?", current_user.id)
      .where("status = ?", 'pending').includes(:friender)
    render 'api/friendships/friend_requests'
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save

      render json: @friendship
    else

      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find_by(user1_id: params[:id], user2_id: current_user.id) || Friendship.find_by(user1_id: current_user.id, user2_id: params[:id])
    @friendship[:status] = "active"
    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    friendship = Friendship.find_by(user1_id: params[:id]) || Friendship.find_by(user2_id: params[:id])
    friendship.destroy
    render json: friendship.user1_id
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id, :status)
  end


end
