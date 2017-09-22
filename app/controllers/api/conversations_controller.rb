class Api::ConversationsController < ApplicationController

  def index
    if current_user
      @conversations = current_user.conversations_started.includes(:messages) + current_user.conversations_received.includes(:messages)
      @friends = current_user.active_friends
      render '/api/conversations/conversations'
    end
  end


  def create
    creator_id = params[:conversation][:creator_id]
    recipient_id = params[:conversation][:recipient_id]

    if Conversation.where("(creator_id = ? AND recipient_id = ?) OR
      (creator_id = ? AND recipient_id = ?)", creator_id, recipient_id, recipient_id, creator_id).present?
      @conversation = Conversation.where("(creator_id = ? AND recipient_id = ?) OR
       (creator_id = ? AND recipient_id = ?)", creator_id, recipient_id,
       recipient_id, creator_id).includes(:messages).first
       render '/api/conversations/conversation'
    else
      @conversation = Conversation.new(conversation_params)

      if @conversation.save
        render '/api/conversations/conversation'
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
