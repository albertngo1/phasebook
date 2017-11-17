import React from 'react';

const navBarMessages = (props) => {
  const conversations = Object.keys(props.conversations).map(el => {
    return props.conversations[el];
  });
  return(
    <div className="navbar-chat-content">
      <div className="arrow-up-wrap">
        <div className="arrow-up">
        </div>
      </div>
      <div className="navbar-chat-recent">
        Recent ({conversations.length})
      </div>
      {conversations.slice(0,3).map( convo => {
        return(
          <div className="navbar-chat-friend-wrap"
            key={`conversation-nav-${convo.id}`}
            onClick={() => props.createConversation(convo)}>
            <img className="navbar-chat-pic" src={convo.profile_pic_small} />
            <div className="navbar-chat-name-body-wrap">
              <div className="navbar-chat-name">
                {convo.friend}
              </div>
              <div className="navbar-chat-body">
                {convo.messages.length > 0 ?
                  convo.messages[convo.messages.length - 1].body : ""}
              </div>
            </div>
          </div>
        )
      })}
      <div className="navbar-chat-footer">
        <span className="navbar-chat-footer-txt" onClick={props.toggleChat}>
          See All in Messenger
        </span>
      </div>
    </div>
  )
}

export default navBarMessages;
