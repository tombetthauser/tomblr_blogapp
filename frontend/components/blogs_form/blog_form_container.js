import { connect } from 'react-redux';

import { createBlog, deleteBlog } from '../../actions/blog_actions';
import BlogForm from './blog_form';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createBlog: blog => dispatch(createBlog(blog))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);