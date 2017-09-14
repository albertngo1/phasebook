import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserFriends } from '../../actions/friendship_actions';
import FA from 'react-fontawesome';

class FriendList extends React.Component {

  constructor(props) {
    super(props);

    this.renderFriendList = this.renderFriendList.bind(this);
  }

  componentDidMount() {
    this.props.receiveUserFriends(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId){
       this.props.receiveUserFriends(nextProps.match.params.userId);
    }
  }

  renderFriendList(friends) {
    const shuffle = require('shuffle-array');
    let friendList;
    let users = friends
    friendList = Object.keys(friends).map( id => {
      return(
        <li key={`friend-${id}`}>
          <div className="pp-fl-img-wrap">
            <Link to={`/users/${id}`}>
              <figure className="pp-fl-img-fig">
                <div className="pp-fl-img-wrap">
                  <img className="pp-fl-img" src={users[id].profile_pic} />
                </div>
                <figcaption className="pp-fl-name">{users[id].first_name} {users[id].last_name}</figcaption>
              </figure>
            </Link>
          </div>
        </li>
      )
    })
    return shuffle(friendList).slice(0, 9);
  }



  render() {
    const { friends } = this.props
    return(
      <div className="pp-fl-ctn">
        <div className="pp-fl-header">
          <div className="pp-fl-friend-icon-wrapper">
           <FA size='lg' name="user-circle" className="pp-fl-friend-icon"/>
          </div>
          <span className="pp-fl-friends-lbl">
            Friends
          </span>
          <span className="pp-fl-friends-dot">
            ·
          </span>
          <span className="pp-fl-friends-ct">
            {Object.keys(friends).length}
          </span>
        </div>
        <ul className="pp-fl-imgs-ctn">
          {this.renderFriendList(friends)}
        </ul>

      </div>
    )
  }

}

const mapStateToProps = state => ({
  friends: state.entities.friendships.friends || {},
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  receiveUserFriends: userId => dispatch(fetchUserFriends(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendList))
