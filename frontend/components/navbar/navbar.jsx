import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import Search from './navbar_search';
import FA from 'react-fontawesome';
import {toggleNavBar} from '../../actions/ui_actions';
import { createConversation } from '../../actions/conversation_actions';
import NavBarMessages from './navbar_messages';
import NavBarFriendRequests from './navbar_friend_req';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.handleOpenChat = this.handleOpenChat.bind(this);
  }

  componentDidMount() {
    this.props.toggleNavBar(0);
  }

  toggleNavBar(nav) {
    this.props.toggleNavBar(nav);
  }

  handleClick() {
    this.props.logout()
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

  render() {
    const {currentUser} = this.props
    return (
      <div>
        <div className="navbar-container">
          {!!currentUser && <Search/>}
          <div className="navbar-right-side-wrap">
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
            <div>
              <FA size='lg'
                name="users"
                className={this.props.navBar === 1 ? "navbar-fr-on" : "navbar-fr"}
                onClick={() => this.toggleNavBar(1)}/>
              <div className="navbar-dropdowns-wrapper-relative">
                <div className="navbar-dropdowns-wrapper-friend">
                  {(this.props.navBar === 1) && (
                    <div className="navbar-fr-content">
                      <p className="navbar-fr-text">Friend Requests</p>
                        <div className="arrow-up-wrap">
                          <div className="arrow-up-fr">
                          </div>
                        </div>
                      <NavBarFriendRequests/>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <FA size='lg'
                name="commenting"
                className={this.props.navBar === 2 ? "navbar-notif-on" : "navbar-notif"}
                onClick={() => this.toggleNavBar(2)}/>
              <div className="navbar-dropdowns-wrapper-relative">
                <div className="navbar-dropdowns-wrapper">
                  {(this.props.navBar === 2) &&
                    <NavBarMessages
                      conversations={this.props.conversations.conversations}
                      createConversation={this.props.createConversation}
                      toggleChat={this.props.toggleChat}
                      />}
                </div>
              </div>
            </div>

            <button onClick={this.handleClick} className="navbar-logout-btn">Logout</button>
          </div>
      </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const currentUser = state.session.currentUser || {};
  return {
    currentUser: currentUser,
    navBar: state.ui.toggleNavBar,
    openChats: state.entities.conversations.openChats,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleNavBar: (nav) => dispatch(toggleNavBar(nav)),
    createConversation: conversation => dispatch(createConversation(conversation)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
