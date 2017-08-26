export const fetchFriendships = () => {
  return $.ajax({
    url: '/api/friendships',
    method: 'GET',
  });
};

export const createFriendship = (friendship) => {
  return $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: {friendship} ,
  });
};
