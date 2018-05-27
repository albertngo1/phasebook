class Api::PostsController < ApplicationController
  def index
    scope = Post.includes(:author, :receiver, :likes, comments: [:author, :likes])
              .order(created_at: :desc)
    if params[:user_id]
      @posts = scope.where(receiver_id: params[:user_id])
    else
      friends = current_user.active_friends
      @posts = scope.where(receiver_id: current_user.active_friends)
    end
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.author_id != current_user.id
      render json: ["Cannot edit other people's posts"], status: 401
    else
      if @post.update(post_params)
        render :post
      else
        render json: @post.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.author_id != current_user.id
      render json: ["Cannot delete other people's posts"], status: 401
    else
      @post.destroy
      render json: @post.id
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :receiver_id, :image)
  end
end
