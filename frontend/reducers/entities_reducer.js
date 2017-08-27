import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import commentReducer from './comment_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  user: userReducer,
});

export default entitiesReducer;
