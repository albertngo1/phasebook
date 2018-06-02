import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFriendship, deleteFriendship,
updateFriendship, cancelRemoveFriendship } from '../../actions/friendship_actions';
import { toggleEditIntroModal } from '../../actions/ui_actions';

class FriendRequest extends React.Component {

   constructor(props) {
      super(props);

      this.friendRequest = this.friendRequest.bind(this);
      this.handleFriendAdd = this.handleFriendAdd.bind(this);
      this.handleFriendAccept = this.handleFriendAccept.bind(this);
      this.handleFriendDelete = this.handleFriendDelete.bind(this);
   }

   handleFriendAdd(id) {
			const friendship = { user1_id: this.props.currentUser.id,
													 user2_id: id,
													 status: "pending" };
      this.props.addFriend(friendship);
   }

   handleFriendAccept(id) {
      this.props.acceptFriend(id);

   }

   handleFriendDelete(id) {
      this.props.removeFriend(id);
   }

   handleCancelAddFriend(id) {
      this.props.cancelAddFriend(id);
   }

   isFriend() {
      const { currentUser } = this.props;
      const activeFriends = currentUser.active_friends || [];
      let friendStatus;
      activeFriends.forEach( el => {
        if (el.id === this.props.match.params.userId) {
          friendStatus = true;
        }
			});
			return friendStatus ? true : false;
   }

   friendRequest() {
      const currentUser = this.props.currentUser;
      const user = this.props.user;
      const receivedFriendRequests = currentUser.received_friend_requests || [];
      const sentFriendRequests = currentUser.sent_friend_requests || [];
      if (currentUser.id === user.id) {
         return (
						<button className="pp-friend-request-button"
										onClick={this.props.toggleEditIntroModal}>
              Edit Profile
            </button>
         );
      } else {
         if (receivedFriendRequests.includes(user.id)) {
            return(
							 <button className="pp-friend-request-button"
							 				 onClick={() => this.handleFriendAccept(user.id)}>
							 	Accept Friend Request
							</button>
            );
         } else if (sentFriendRequests.includes(user.id)) {
            return(
							<button className="pp-friend-request-button"
											onClick={() => this.handleCancelAddFriend(user.id)}>
							 	Sent Friend Request
							</button>
            );
         } else if (this.isFriend()) {
            return(
							<button className="pp-friend-request-button"
											onClick={() => this.handleFriendDelete(user.id)}>
							 	Friends
							</button>
            );
         } else {
            return(
							<button className="pp-friend-request-button"
											onClick={() => this.handleFriendAdd(user.id)}>
							 	Add Friend
							</button>
            );
         }
      }
   }

   render() {
      return(
         <div>
            {this.friendRequest()}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const  currentUser = state.session.currentUser || {};
   return {
      user: state.entities.user || {},
      currentUser: state.session.currentUser || {},
      friendships: state.entities.friendships || {},
   }
};

const mapDispatchToProps = dispatch => ({
   addFriend: (friendship) => dispatch(createFriendship(friendship)),
   removeFriend: friendId => dispatch(deleteFriendship(friendId)),
   cancelAddFriend: friendId => dispatch(cancelRemoveFriendship(friendId)),
   acceptFriend: friendId => dispatch(updateFriendship(friendId)),
   toggleEditIntroModal: () => dispatch(toggleEditIntroModal),
});

export default withRouter(connect(mapStateToProps,
  																mapDispatchToProps)(FriendRequest));
