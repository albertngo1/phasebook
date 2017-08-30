import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import * as shuffle from 'shuffle-array';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../util/selectors';

class FriendList extends React.Component {

  constructor(props) {
    super(props);

    this.grabFriends = this.grabFriends.bind(this);
  }
  grabFriends() {
    let shuffledFriends;
    const user = this.props.user;
    if (Array.isArray(user.active_friends)) {
      shuffledFriends = shuffle.default(user.active_friends);
      shuffledFriends.map( friend => {
        return(
          <li key={`friend-${friend.id}`}>
            <div>
              {friend.profile_pic}
              <div>
                {friend.name}
              </div>
            </div>
          </li>
        )
      });
    }
    return shuffledFriends;
  }







  render() {
      const { user } = this.props;
      let friendCount;
      let friendList;
      if (Array.isArray(user.active_friends)) {
        friendCount = user.active_friends.length;
        friendList = user.active_friends;
      } else {
        friendCount = 0;
        friendList = [];
      }
      return(
        <div>
          <div>Friends · {friendCount}</div>
          <ul>
            {friendList.map( friend => {
                    return(
                      <li key={`friend-${friend.id}`}>
                        <div>
                          <img src={this.props.users[friend.id]} />
                          <div>
                            {friend.first_name} {friend.last_name}
                          </div>
                        </div>
                      </li>
                    )
                  })}
          </ul>
        </div>
      )
    }

}

const mapStateToProps = state => ({
  users: selectAllUsers(state),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
