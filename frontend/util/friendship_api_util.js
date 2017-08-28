
export const createFriendship = (friendship) => {
  return $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: {friendship} ,
  });
};

export const updateFriendship = (friendship) => {
  return $.ajax({
    url: `/api/friendships/${friendship.id}`,
    method: 'PATCH',
    data: {friendship},
  });
};

export const deleteFriendship = friendshipId => {
  return $.ajax({
    url: `/api/friendships/${friendshipId}`,
    method: 'DELETE',
  });
};

export const fetchFriendRequests = userId => {
  return $.ajax({
    url: `/api/users/${userId}/friendships`,
    method: 'GET',
  })
}
