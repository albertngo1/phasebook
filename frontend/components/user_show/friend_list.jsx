import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import * as shuffle from 'shuffle-array';
import { connect } from 'react-redux';
import { fetchUserFriends } from '../../actions/friendship_actions';

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
    let friendList;
    let users = friends
    friendList = Object.keys(friends).map( id => {
      return(
        <li key={`friend-${id}`}>
          <div className="pp-fl-img-wrap">
            <Link to={`/users/${id}`}>
              <figure className="pp-fl-img-fig">
                <img className="pp-fl-img" src={users[id].profile_pic} />
                <figcaption className="pp-fl-name">{users[id].first_name} {users[id].last_name}</figcaption>
              </figure>
            </Link>
          </div>
        </li>
      )
    })
    return friendList;
  }



  render() {
    const { friends } = this.props
    return(
      <div className="pp-fl-ctn">
        <div className="pp-fl-header">
          <div>

          </div>
          <span className="pp-fl-friends-lbl">
            Friends
          </span>
          <span>
            ·
          </span>
          <span>
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
