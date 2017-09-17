import React from 'react';
import { connect } from 'react-redux';
import { createMessage, deleteMessage,
   createConversation, removeConversation } from '../../actions/conversation_actions';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleChat = this.handleToggleChat.bind(this);
    this.makeOpenChats = this.makeOpenChats.bind(this);
    this.parseMessage = this.parseMessage.bind(this);
  }

  handleOpenChat(friend) {
    const conversation = {creator_id: this.props.currentUserId,
       recipient_id: friend.friend_id};
      this.props.createConversation(conversation);
  }

  makeOpenChats() {
    let result = this.props.openChats.map( chat => {
      return(
        <div key={`chat-${chat.id}`}>
          <div>{chat.friend}</div>
          {chat.messages.map( message => {
            return(
              <div key={`messages-${chat.friend}-${message.id}`}>
                {this.parseMessage(message)}
              </div>
            )
          })}
          <input type="text" />
        </div>
      )
    })
    return result;
  }
  parseMessage(message) {
    const currentUserId = this.props.currentUserId
      if (message.author_id !== currentUserId) {
        return(
          <div>
            {message.body}
          </div>
        )
      } else {
        return(
          <div>
            {message.body}
          </div>
        )
      }
    }

  handleToggleChat(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleChat();
    };
  }

  render() {
    let conversations = this.props.conversations.conversations
    let friends = this.props.conversations.friends
    const openChats = this.props.openChats

    if (this.props.chat) {
      return(
        <div>
          <div onClick={this.props.toggleChat}>
            Chat
          </div>
          {!!friends && Object.keys(friends).map(key => {
            let friend = friends[key];
            return(
              <div onClick={() => this.handleOpenChat(friend)} key={`conversation-${friend.friend_id}`}>
                <div>{friend.friend}</div>
                <img src={friend.friend_pic}/>
              </div>
            )
          })}
          <div>
            {openChats.length > 0 && this.makeOpenChats().map(el => el)}
          </div>
        </div>
      )
    } else {
      return(
        <div onClick={this.props.toggleChat}>
          <div>
            <span>Chat</span><span>({Object.keys(friends).length})</span>
          </div>
          <div>
            {openChats.length > 0 && this.makeOpenChats().map(el => el)}
          </div>
        </div>
      )
    }

  }
}
const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id || {},
    chat: state.ui.toggleChat,
    openChats: state.entities.conversations.openChats,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message)),
    deleteMessage: message => dispatch(deleteMessage(message)),
    createConversation: conversation => dispatch(createConversation(conversation)),
    removeConversation: conversationId => dispatch(removeConversation(conversationId)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
