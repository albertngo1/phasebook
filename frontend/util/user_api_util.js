export const fetchSingleUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
};

export const updateUser = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
  })
}

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
  })
}
