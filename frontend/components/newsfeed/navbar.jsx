import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import Search from './navbar_search';
import FA from 'react-fontawesome';
import {updateFriendship, deleteFriendship, fetchFriendRequests} from '../../actions/friendship_actions';
import {toggleNavBar} from '../../actions/ui_actions';
import { createConversation } from '../../actions/conversation_actions';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAcceptFriend = this.handleAcceptFriend.bind(this);
    this.handleDenyFriend = this.handleDenyFriend.bind(this);
    this.renderFriendRequests = this.renderFriendRequests.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.renderMessageBox = this.renderMessageBox.bind(this);
    this.handleOpenChat = this.handleOpenChat.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriendRequests();
    this.props.toggleNavBar(0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchFriendRequests();
    }
  }

  toggleNavBar(nav) {
    this.props.toggleNavBar(nav);
  }

  handleClick() {
    this.props.logout()
  }

  handleAcceptFriend(id) {
    this.props.updateFriendship(id).then(this.props.fetchFriendRequests());
  }

  handleDenyFriend(id) {
    this.props.deleteFriendship(id).then(this.props.fetchFriendRequests());
  }

  handleOpenChat(friend) {
    let chatExist = false;
    this.props.openChats.forEach(el => {
      if (el.friend_id === friend.friend_id) {
        chatExist = true;
      }
    })
    if (chatExist === false) {
      const conversation = {creator_id: this.props.currentUserId,
        recipient_id: friend.friend_id};
        this.props.createConversation(conversation);
    }
  }

  renderMessageBox() {
    const conversations = Object.keys(this.props.conversations.conversations).map(el => {
      return this.props.conversations.conversations[el];
    });
    return(
      <div className="navbar-chat-content">
        <div className="navbar-chat-recent">
          Recent ({conversations.length})
        </div>
        {conversations.slice(0,3).map( convo => {
          return(
            <div className="navbar-chat-friend-wrap"
              key={`conversation-nav-${convo.id}`}
              onClick={() => this.props.createConversation(convo)}>
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
          <span className="navbar-chat-footer-txt" onClick={this.props.toggleChat}>
            See All in Messenger
          </span>
        </div>
      </div>
    )
  }

  renderFriendRequests() {
    const users = this.props.friendReqUsers;
    if ((Object.keys(users).length > 0) && (Object.keys(this.props.friendRequests).length > 0)) {
      const friendReqMap = this.props.friendRequests.map(id => {
        return (
          <div className="navbar-fr-wrap" key={`friendReq-${id}`}>
            <div className="navbar-fr-name">
              <Link to={`/users/${users[id].id}`}>
                <div>
                  {users[id].first_name} {users[id].last_name}
                </div>
              </Link>
            </div>
            <div className="navbar-fr-btn-wrap">
              <button className="navbar-fr-confirm" onClick={() => this.handleAcceptFriend(id)}>Confirm</button>
              <button className="navbar-fr-deny" onClick={() => this.handleDenyFriend(id)}>Delete Request</button>
            </div>
          </div>
        )
      })
      if (friendReqMap.length > 0) {
        return friendReqMap;
      } else {
        return <div className="navbar-fr-no-friends">No pending requests.</div>
      }
    } else {
      return (
        <div></div>
      )
    }
  }
  render() {
    const {currentUser} = this.props
    return (
      <div>
        <div className="navbar-container">
          {!!currentUser && <Search/>}
          <Link to={`/users/${currentUser.id}`}>
            <div className="navbar-user-wrap">
              <img className="navbar-user-pp" src={currentUser.profile_pic_small} alt="profile-pic"/>
              <button className="navbar-user-home-hover">
                <div className="navbar-user">
                  {currentUser.first_name}</div>
              </button>
            </div>
          </Link>
          <div className="navbar-user-home-hover:hover">
            <Link to='/' className="navbar-user navbar-home">Home</Link>
          </div>
          <FA size='lg'
            name="users"
            className={this.props.navBar === 1 ? "navbar-fr-on" : "navbar-fr"}
            onClick={() => this.toggleNavBar(1)}/>

          <FA size='lg'
            name="commenting"
            className={this.props.navBar === 2 ? "navbar-notif-on" : "navbar-notif"}
            onClick={() => this.toggleNavBar(2)}/>

          <button onClick={this.handleClick} className="navbar-logout-btn">Logout</button>
      </div>
      <div className="navbar-dropdowns-wrapper">
        {(this.props.navBar === 1) && (
          <div className="navbar-fr-content">
            <p className="navbar-fr-text">Friend Requests</p>
            {this.renderFriendRequests()}
          </div>
        )}
        {(this.props.navBar === 2) &&
          this.renderMessageBox()}
      </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const currentUser = state.session.currentUser || {};
  return {
    currentUser: currentUser,
    friendRequests: currentUser.received_friend_requests || {},
    friendReqUsers: state.entities.friendships.friendRequests || {},
    navBar: state.ui.toggleNavBar,
    openChats: state.entities.conversations.openChats,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    updateFriendship: friendshipId => dispatch(updateFriendship(friendshipId)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
    toggleNavBar: (nav) => dispatch(toggleNavBar(nav)),
    createConversation: conversation => dispatch(createConversation(conversation)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))

// <FA size='lg' name="globe" className="navbar-notif"/>

// <div className="navbar-logout-dropdown" onClick={this.handleClick}>
//    <FA size='lg' name="sort-desc" className="navbar-logout" />
//       <div onClick={this.handleClick} className="navbar-logout-dropdown-content">
//          <p>Logout</p>
//       </div>
// </div>
