import {
  RECEIVE_ALL_BLOGS,
  RECEIVE_BLOG,
  REMOVE_BLOG
} from '../actions/blog_actions';

const blogsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_BLOGS:
      return Object.assign({}, state, action.blogs)
    case RECEIVE_BLOG:
      const newBlog = { [action.blog.id]: action.blog };
      return Object.assign({}, state, newBlog);
    case REMOVE_BLOG:
      const newState = Object.assign({}, state);
      delete newState[action.blogId];
      return newState;
    default:
      return state;
  }
};

export default blogsReducer;