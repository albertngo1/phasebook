import * as APIFriendshipUtil from '../util/friendship_api_util';

export const DELETE_FRIENDSHIP = "DELETE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";

export const removeFriendship = friendshipId => ({
  type: DELETE_FRIENDSHIP,
  friendshipId,
});

export const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
});
export const receiveAllFriendships = friendships => ({
  type: RECEIVE_ALL_FRIENDSHIPS,
  friendships,
})

export const createFriendship = friendship => dispatch => {
  return APIFriendshipUtil.createFriendship(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};

export const updateFriendship = friendship => dispatch => {
  return APIFriendshipUtil.updateFriendship(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};

export const deleteFriendship = friendshipId => dispatch => {
  return APIFriendshipUtil.deleteFriendship(friendshipId)
    .then(() => dispatch(removeFriendship(friendshipId)))
};

export const fetchFriendRequests = userId => dispatch => {
  return APIFriendshipUtil.fetchFriendRequests(userId)
    .then(friendships => dispatch(receiveAllFriendships(friendships)))
}
