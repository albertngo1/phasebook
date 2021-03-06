class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like[:liker_id] = current_user.id

    if @like.save
      render :like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :like
  end

  private

  def like_params
    params.require(:like).permit(:like_item_id, :like_item_type)
  end
end
