import { combineReducers } from 'redux';

import users from './users_reducer';
import blogs from './blogs_reducer';
import posts from './posts_reducer';
import session from './session_reducer';

const entitiesReducer = combineReducers({
  users,
  session,
  blogs,
  posts
});

export default entitiesReducer;