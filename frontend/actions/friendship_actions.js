import * as APIFriendshipUtil from '../util/friendship_api_util';

export const DELETE_FRIENDSHIP = "DELETE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const ADD_FRIENDSHIP = "ADD_FRIENDSHIP";
export const CANCEL_FRIENDSHIP = "CANCEL_FRIENDSHIP";
export const RECEIVE_USER_FRIENDS = "RECEIVE_USER_FRIENDS";
export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";

export const removeFriendship = friendshipId => ({
  type: DELETE_FRIENDSHIP,
  friendshipId,
});

export const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
});

export const addFriendship = friendship => ({
  type: ADD_FRIENDSHIP,
  friendship,
})

export const cancelFriendship = friendshipId => ({
  type: CANCEL_FRIENDSHIP,
  friendshipId
})

export const receiveUserFriends = (friends) => ({
  type: RECEIVE_USER_FRIENDS,
  friends,
})

export const receiveFriendRequests = friendRequests => ({
  type: RECEIVE_FRIEND_REQUESTS,
  friendRequests,
})

export const fetchUserFriends = (userId) => dispatch => {
  return APIFriendshipUtil.fetchUserFriends(userId)
    .then(friends => dispatch(receiveUserFriends(friends)))
}

export const fetchFriendRequests = () => dispatch => {
  return APIFriendshipUtil.fetchFriendRequests()
    .then( friendRequests => dispatch(receiveFriendRequests(friendRequests)))
}

export const cancelRemoveFriendship = friendshipId => dispatch => {
  return APIFriendshipUtil.deleteFriendship(friendshipId)
    .then(() => dispatch(cancelFriendship(friendshipId)))
}

export const createFriendship = friendship => dispatch => {
  return APIFriendshipUtil.createFriendship(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
    .then(friendship => dispatch(addFriendship(friendship)))
};

export const updateFriendship = frienderId => dispatch => {
  return APIFriendshipUtil.updateFriendship(frienderId)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};

export const deleteFriendship = friendshipId => dispatch => {
  return APIFriendshipUtil.deleteFriendship(friendshipId)
    .then(() => dispatch(removeFriendship(friendshipId)))
};
