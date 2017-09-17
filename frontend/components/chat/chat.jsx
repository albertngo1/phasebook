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

  handleOpenChat(convo) {
    const conversation = {creator_id: this.props.currentUser.id,
       recipient_id: convo.friend_id};
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
    const currentUser = this.props.currentUser
      if (message.author_id !== currentUser.id) {
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
    let { conversations } = this.props.conversations
    const openChats = this.props.openChats

    if (this.props.chat) {
      return(
        <div>
          <div onClick={this.props.toggleChat}>
            Chat
          </div>
          {!!conversations && Object.keys(conversations).map(key => {
            let convo = conversations[key];
            return(
              <div onClick={() => this.handleOpenChat(convo)} key={`conversation-${convo.id}`}>
                <div>{convo.friend}</div>
                <img src={convo.friend_pic}/>
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
            <span>Chat</span><span>({Object.keys(conversations).length})</span>
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
    currentUser: state.session.currentUser || {},
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
