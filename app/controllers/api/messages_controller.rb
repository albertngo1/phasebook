class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(like_params)
    @message[:author_id] = current_user.id

    if @message.save
      render '/api/conversations/conversation'
    else
      render json: @message.errors.full_messages
    end
  end

  def destroy
    message = Message.find(params[:id])
    message.destroy
    render json: message.id
  end

  private

  def message_params
    params.require(:message).permit(:body, :conversation_id)
  end


end
