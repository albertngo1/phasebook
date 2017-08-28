class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:author).includes(:receiver)
  end


  def create
    @post = Post.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  def update

    @post = Post.find(params[:id])
    if @post.author_id != current_user.id
      render json: ["Cannot edit other people's posts"], status: 401
    else
      if @post.update_attributes(post_params)
        render 'api/posts/show'
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
    params.require(:post).permit(:body, :author_id, :receiver_id)
  end


end
