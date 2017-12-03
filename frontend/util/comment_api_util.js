export const createComment = (comment) => {
  return $.ajax({
    url: `/api/posts/${comment.post_id}/comments`,
    method: 'POST',
    data: {comment} ,
  });
};

export const deleteComment = id => {
  return $.ajax({
    url: `/api/comments/${id}`,
    method: "DELETE",
  })
}
