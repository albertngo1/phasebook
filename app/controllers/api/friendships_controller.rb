class Api::FriendshipsController < ApplicationController

  # friendship statuses => pending, received, active, rejected

  def index
    @friendships = Friendship.all
  end

  def create
    @friendship = Friendship.new(friendship_params)
    debugger
    if @friendship.save!
      @other_friendship = Friendship.create(user1_id: friendship_params[:user2_id],
      user2_id: friendship_params[:user1_id], status: "received")
      debugger
      render 'api/friendships/show'
    else

      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id, :status)
  end


end
