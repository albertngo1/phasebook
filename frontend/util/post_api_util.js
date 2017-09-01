export const fetchPosts = () => {
  return $.ajax({
    url: '/api/posts',
    method: 'GET',
  });
};

export const createPost = (formData) => {
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false
  });
};

export const updatePost = post => {
  return $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: { post },
  })
}

export const deletePost = id => {
  return $.ajax({
    url: `/api/posts/${id}`,
    method: "DELETE",
  })
}
