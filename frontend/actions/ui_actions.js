
export const TOGGLE_POST_MODAL = 'TOGGLE_POST_MODAL';
export const TOGGLE_EDIT_POST_MODAL = 'TOGGLE_EDIT_POST_MODAL';
export const TOGGLE_POST_SHOW_MODAL = 'TOGGLE_POST_SHOW_MODAL';

export const togglePostModal = {
  type: TOGGLE_POST_MODAL,
}

export const toggleEditPostModal = postId => ({
  type: TOGGLE_EDIT_POST_MODAL,
  postId
});

export const togglePostShowModal = {
  type: TOGGLE_POST_SHOW_MODAL,
}
