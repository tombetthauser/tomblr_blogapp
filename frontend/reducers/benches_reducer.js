import {
  RECEIVE_REVIEW,
  RECEIVE_BLOGS,
  RECEIVE_BLOG
} from '../actions/blog_actions';

const blogsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_BLOGS:
      return action.blogs;
    case RECEIVE_BLOG:
      const newBlog = { [action.blog.id]: action.blog };
      return Object.assign({}, state, newBlog);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, state);
      newState[review.blog_id].reviewIds.push(review.id);
      newState[review.blog_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default blogsReducer;
