import React from 'react';
import { connect } from 'react-redux';
import { createMessage, deleteMessage,
   createConversation, removeConversation } from '../../actions/conversation_actions';

class Chat extends React.Component {

  constructor(props) {
    super(props);


  }

  handleToggleChat(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleChat();
    };
  }

  render() {
    let { conversations } = this.props.conversations

    if (this.props.chat) {
      return(
        <div>
          <div onClick={this.props.toggleChat}>
            ChatChatChatChatChatChatChatChatChat
          </div>
          {!!conversations && Object.keys(conversations).map(key => {
            let convo = conversations[key];
            return(
              <div key={`conversation-${convo.id}`}>
                <div>{convo.friend}</div>
                <img src={convo.friend_pic}/>
              </div>
            )
          })}
        </div>
      )
    } else {
      return(
        <div onClick={this.props.toggleChat}>
          Chat
        </div>
      )
    }

  }
}
const mapStateToProps = state => {
  return {
    chat: state.ui.toggleChat,
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
