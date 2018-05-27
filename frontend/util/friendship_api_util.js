export const createFriendship = (friendship) => {
  return $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: {friendship} ,
  });
};

export const updateFriendship = (id) => {
  return $.ajax({
    url: `/api/friendships/${id}`,
    method: 'PATCH',
  });
};

export const deleteFriendship = friendshipId => {
  return $.ajax({
    url: `/api/friendships/${friendshipId}`,
    method: 'DELETE',
  });
};

export const fetchUserFriends = userId => {
  return $.ajax({
    url: `api/users/${userId}/friendships`,
    method: 'GET',
  });
};

export const fetchFriendRequests = () => {
  return $.ajax({
    url: '/api/friendships/friend_requests',
    method: 'GET',
  })
}
