import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import commentReducer from './comment_reducer';
import userReducer from './user_reducer';
import friendshipReducer from './friendship_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  user: userReducer,
  friendships: friendshipReducer,
});

export default entitiesReducer;
