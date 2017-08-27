class Api::FriendshipsController < ApplicationController

  # friendship statuses => pending, active, rejected

  def index
    @friendships = Friendship.all
    render 'api/friendship/index'
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save!
      render json: @friendship
    else

      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.update_attributes(friendship_params)
      render 'api/friendships/show'
    else
      render json: @friendship.errors.full_messages, status: 422
  end

  def destroy
    friendship = Friendship.find(params[:id])
    friendship.destroy
    render json: friendship.id
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id, :status)
  end


end
