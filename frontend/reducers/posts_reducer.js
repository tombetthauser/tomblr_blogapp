import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts)
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, state, newPost);
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;