import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'DESTROY_FOLLOW';

const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows: follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId: followId
});

export const fetchFollows = () => dispatch => (
  APIUtil.fetchFollows()
    .then(follows => dispatch(receiveAllFollows(follows)))
);

export const fetchFollow = followId => dispatch => (
  APIUtil.fetchFollow(followId)
    .then(follow => dispatch(receiveFollow(follow)))
);

export const createFollow = follow => dispatch => (
  APIUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
);

export const updateFollow = follow => dispatch => (
  APIUtil.updateFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = followId => dispatch => (
  APIUtil.deleteFollow(followId)
    .then(follow => dispatch(removeFollow(follow.id)))
);
