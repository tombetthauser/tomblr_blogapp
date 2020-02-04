import * as APIUtil from '../util/blog_api_util';

export const RECEIVE_ALL_BLOGS = 'RECEIVE_ALL_BLOGS';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const REMOVE_BLOG = 'DESTROY_BLOG';

const receiveAllBlogs = blogs => ({
  type: RECEIVE_ALL_BLOGS,
  blogs: blogs
});

const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog: blog
});

const removeBlog = blogId => ({
  type: REMOVE_BLOG,
  blogId: blogId
});

export const fetchBlogs = () => dispatch => (
  APIUtil.fetchBlogs()
    .then(blogs => dispatch(receiveAllBlogs(blogs)))
);

export const fetchBlog = blogId => dispatch => (
  APIUtil.fetchBlog(blogId)
    .then(blog => dispatch(receiveBlog(blog)))
);

export const createBlog = blog => dispatch => (
  APIUtil.createBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)))
);

export const updateBlog = blog => dispatch => (
  APIUtil.updateBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)))
);

export const deleteBlog = blogId => dispatch => (
  APIUtil.deleteBlog(blogId)
    .then(() => dispatch(removeBlog(blogId)))
);
