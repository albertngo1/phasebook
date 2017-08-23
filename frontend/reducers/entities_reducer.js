import { combineReducers } from 'redux';
import postReducer from './post_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
});

export default entitiesReducer;
