import { fetchBlog, fetchBlogs, deleteBlog } from '../../actions/blog_actions';
import { requestUser } from '../../actions/user_actions';
import { selectBlog } from '../../reducers/selectors';
import { connect } from 'react-redux';
import NewBlogPage from './new_blog_page';
// import { createBlog, deleteBlog } from '../../actions/blog_actions';

const mapStateToProps = (state, { match }) => ({
  // blog: selectBlog(state, match.params.blogId),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBlog: blog => dispatch(createBlog(blog)),
  // fetchBlogs: () => dispatch(fetchBlogs()),
  // requestUser: userId => dispatch(requestUser(userId)),
  // deleteBlog: blogId => dispatch(deleteBlog(blogId)),
  // fetchBlog: id => dispatch(fetchBlog(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogPage);