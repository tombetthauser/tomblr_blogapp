import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'DESTROY_POST';

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts: posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post: post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId: postId
});

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);


// CREATE POST ----------------------------------------

export const createPost = formData => dispatch => (
  APIUtil.createPost(formData)
    .then(formData => dispatch(receivePost(formData)))
);

// export const createPost = post => dispatch => (
//   APIUtil.createPost(post)
//     .then(post => dispatch(receivePost(post)))
// );

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  APIUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)))
);
