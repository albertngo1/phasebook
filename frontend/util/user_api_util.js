export const fetchSingleUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
};

export const updateUser = (formData, id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data: formData,
    processData: false,
    contentType: false

  })
}

export const fetchSearchUsers = (searchString) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: {search: searchString}
  })
}
