import * as APIUtil from '../util/blog_api_util';

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';

export const receiveBlogs = blogs => ({
  type: RECEIVE_BLOGS,
  blogs: blogs
});

export const recieveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog: blog
});

export const fetchBlogs = () => dispatch => (
  APIUtil.fetchBlogs().then(blogs => (
    dispatch(receiveBlogs(blogs))
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(payload => (
    dispatch(receiveBench(payload))
  ))
);

export const createBench = bench => dispatch => (
  APIUtil.createBench(bench).then(bench => (
    dispatch(receiveBench(bench))
  ))
);
