class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      Pusher.trigger('conversation_' + @message.conversation_id.to_s, 'create_message', {
        id: @message.id,
        body: @message.body,
        author_id: @message.author_id,
        conversation_id: @message.conversation_id,
        created_at: @message.created_at,
        updated_at: @message.updated_at
        })

      render json: @message
    else
      render json: @message.errors.full_messages
    end
  end

  def destroy
    message = Message.find(params[:id]).destroy
    render json: message.id
  end

  private

  def message_params
    params.require(:message).permit(:body, :conversation_id)
  end
end
