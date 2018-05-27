class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations_started.includes(:messages, :recipient, :creator) + current_user.conversations_received.includes(:messages).includes(:recipient).includes(:creator)
    @friends = current_user.active_friends
    render :conversations
  end

  def create
    creator_id = params[:conversation][:creator_id]
    recipient_id = params[:conversation][:recipient_id]

    if Conversation.where("(creator_id = ? AND recipient_id = ?) OR
      (creator_id = ? AND recipient_id = ?)", creator_id, recipient_id, recipient_id, creator_id).present?
      @conversation = Conversation.where("(creator_id = ? AND recipient_id = ?) OR
       (creator_id = ? AND recipient_id = ?)", creator_id, recipient_id,
       recipient_id, creator_id).includes(:messages).first
       render :conversation
    else
      @conversation = Conversation.new(conversation_params)

      if @conversation.save
        render :conversation
      else
        render json: @conversation.errors.full_messages
      end
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:creator_id, :recipient_id)
  end
end
