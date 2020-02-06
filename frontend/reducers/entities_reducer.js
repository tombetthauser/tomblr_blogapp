import { combineReducers } from 'redux';

import users from './users_reducer';
import blogs from './blogs_reducer';

const entitiesReducer = combineReducers({
  users,
  blogs
});

export default entitiesReducer;