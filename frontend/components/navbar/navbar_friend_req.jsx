import React from 'react';
import {connect} from 'react-redux';
import {updateFriendship, deleteFriendship, fetchFriendRequests} from '../../actions/friendship_actions';
import {withRouter, Link} from 'react-router-dom';

class NavBarFriendRequests extends React.Component {

  constructor(props) {
    super(props);
    this.handleAcceptFriend = this.handleAcceptFriend.bind(this);
    this.handleDenyFriend = this.handleDenyFriend.bind(this);
    this.buildFriends = this.buildFriends.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriendRequests();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchFriendRequests();
    }
  }

  handleAcceptFriend(id) {
    this.props.updateFriendship(id).then(this.props.fetchFriendRequests());
  }

  handleDenyFriend(id) {
    this.props.deleteFriendship(id).then(this.props.fetchFriendRequests());
  }

  buildFriends() {
    let result = [];
    const users = this.props.users;
    if ((Object.keys(users).length > 0) && (Object.keys(this.props.friendRequests).length > 0)) {
      result = this.props.friendRequests.map(id => {
        return (<div className="navbar-fr-wrap" key={`friendReq-${id}`}>
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
        </div>)
      })
    }
    return result;
  }

  render() {
    const friendReqMap = this.buildFriends();
    if (friendReqMap && friendReqMap.length > 0) {
      return (
        <div>
          {friendReqMap.map(el => el)}
        </div>
        );
    } else {
      return (<div className="navbar-fr-no-friends">No pending requests.</div>)
    }
  }
}

const mapStateToProps = state => {
  const currentUser = state.session.currentUser || {};
  return {
    currentUser: currentUser,
    friendRequests: currentUser.received_friend_requests || {},
    users: state.entities.friendships.friendRequests || {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFriendship: friendshipId => dispatch(updateFriendship(friendshipId)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarFriendRequests));
