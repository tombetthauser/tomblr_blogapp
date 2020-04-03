import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return Object.assign({}, state, action.follows)
    case RECEIVE_FOLLOW:
      const newFollow = { [action.follow.id]: action.follow };
      return Object.assign({}, state, newFollow);
    case REMOVE_FOLLOW:
      const newState = Object.assign({}, state);
      delete newState[action.followId];
      return newState;
    default:
      return state;
  }
};

export default followsReducer;