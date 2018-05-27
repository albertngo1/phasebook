class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment[:author_id] = current_user.id
    if @comment.save
      render '/api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if current_user.id == @comment.author_id
      @comment.destroy
      render json: @comment
    else
      render json: ["You are not authorized to destroy this comment"], status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
