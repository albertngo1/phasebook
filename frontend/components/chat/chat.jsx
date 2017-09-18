import React from 'react';
import { connect } from 'react-redux';
import { createMessage, deleteMessage,
   createConversation, removeConversation } from '../../actions/conversation_actions';
import { Link } from 'react-router-dom';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleChat = this.handleToggleChat.bind(this);
    this.makeOpenChats = this.makeOpenChats.bind(this);
    this.parseMessage = this.parseMessage.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleMessageInput(e, chat) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const body = $(`.chat-${chat.friend_id}`).val();
      const message = {
        body: body,
        conversation_id: chat.id
      }
      this.props.createMessage(message).then(() => {
        $(`.chat-${chat.friend_id}`).val("");
      })
    }
  }

  handleOpenChat(friend) {
    const conversation = {creator_id: this.props.currentUserId,
       recipient_id: friend.friend_id};
      this.props.createConversation(conversation);
  }

  makeOpenChats() {
    let result = this.props.openChats.map( chat => {
      const friendPic = chat.friend_pic
      return(
        <div className="chat-id-wrap-overall" key={`chat-${chat.id}`}>
          <div className="chat-id-wrapper">
            <div className="chat-id-name-wrap">
              <div className="chat-id-name">{chat.friend}</div>
              <div className="chat-id-name-x">X</div>
            </div>
            <div className="chat-messages-wrapper">
              {chat.messages.map( message => {
                return(this.parseMessage(message, friendPic))
              })}
              <div id="chat-end">asd</div>
            </div>
            <input className={`chat-${chat.friend_id} chat-id-input`}
              onKeyPress={(e) => this.handleMessageInput(e, chat)} type="text"
              placeholder="Type a message..."
              />
          </div>
          <div></div>
        </div>
      )
    })
    $('.chat-messages-wrapper').animate({scrollTop: $('#chat-end').height()}, 0);
    return result;
  }
  parseMessage(message, friendPic) {
    debugger
    const currentUserId = this.props.currentUserId
      if (message.author_id !== currentUserId) {
        return(
          <div key={`chat-msg-${message.id}`}
            className="chat-received-wrap">
            <Link to={`/users/${message.author_id}`}>
              <img className="chat-received-pic"
                src={friendPic} />
            </Link>
            <span className="chat-received-msg">
              {message.body}
            </span>
          </div>
        )
      } else {
        return(
          <div className="chat-sent-wrap" key={`chat-msg-${message.id}`}>
            <span className="chat-sent-msg">
              {message.body}
            </span>
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
        <div className="chat-entire-wrap1">
          <div className="chat-entire-btm-wrap1">
            <div className="chat-btm-right-tgl-on" onClick={this.props.toggleChat}>
              Chat
            </div>
            {!!friends && Object.keys(friends).map(key => {
              let friend = friends[key];
              return(
                <div className="chat-friendlist-wrap" onClick={() => this.handleOpenChat(friend)} key={`conversation-${friend.friend_id}`}>
                  <img className="chat-friendlist-pic"src={friend.friend_pic}/>
                  <div className="chat-friendlist-name">{friend.friend}</div>
                </div>
              )
            })}
          </div>
          {openChats.length > 0 && this.makeOpenChats().map(el => el)}
        </div>
      )
    } else {
      return(
        <div className="chat-entire-btm-wrap2">
          <div className="chat-btm-right-tgl-off" onClick={this.props.toggleChat}>
            <div className="chat-btm-right-tgl-off-txt">
              <div className="chat-green-dot"></div><span>Chat ({Object.keys(friends).length})</span>
            </div>
          </div>
          {openChats.length > 0 && this.makeOpenChats().map(el => el)}
        </div>
      )
    }

  }
}
const mapStateToProps = state => {
  const  currentUser = state.session.currentUser || {};
  return {
    currentUserId: currentUser.id,
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
