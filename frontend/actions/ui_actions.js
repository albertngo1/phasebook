
export const TOGGLE_POST_MODAL = 'TOGGLE_POST_MODAL';
export const TOGGLE_EDIT_POST_MODAL = 'TOGGLE_EDIT_POST_MODAL';
export const TOGGLE_EDIT_INTRO_MODAL = 'TOGGLE_EDIT_INTRO_MODAL';
export const TOGGLE_CHAT = 'TOGGLE_CHAT';

export const togglePostModal = {
  type: TOGGLE_POST_MODAL,
}

export const toggleEditPostModal = postId => ({
  type: TOGGLE_EDIT_POST_MODAL,
  postId
});

export const toggleEditIntroModal = {
  type: TOGGLE_EDIT_INTRO_MODAL,
}

export const toggleChat = {
  type: TOGGLE_CHAT,
}
