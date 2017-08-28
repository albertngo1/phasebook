class Api::FriendshipsController < ApplicationController

  # friendship statuses => pending, active

  def index
    @friendships = Friendship.where("status = 'pending' AND user2_id = ?", current_user.id).includes(:friender).includes(:friendee)
    render 'api/friendships/index'
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
    @friendship = Friendship.find_by(receiver_id: params[:id])

    if @friendship.update(friendship_params)
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    friendship = Friendship.find(params[:id])
    friendship.destroy
    render json: friendship
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id, :status)
  end


end
