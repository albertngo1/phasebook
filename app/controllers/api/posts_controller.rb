class Api::PostsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      @posts = Post.where("receiver_id = ?", params[:user_id])
                    .includes(:author)
                    .includes(:receiver)
                    .includes(:likes)
                    .includes(:comments => [:author, :likes])
                    .order("created_at DESC")
    else
      friends = current_user.active_friends
      @posts = Post.where(:receiver_id => friends)
                .includes(:author)
                .includes(:receiver)
                .includes(:likes)
                .includes(:comments => [:author, :likes])
                .order("created_at DESC")
    end
  end

  def create
    @post = Post.new(post_params)
    @post[:author_id] = current_user.id
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
      if @post.update(post_params)
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
    params.require(:post).permit(:body, :receiver_id, :image)
  end
end
