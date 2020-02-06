import { connect } from 'react-redux';

import { createBlog, deleteBlog } from '../../actions/blog_actions';
import BlogForm from './blog_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBlog: blog => dispatch(createBlog(blog)),
  deleteBlog: blogId => dispatch(deleteBlog(blogId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);