import { connect } from 'react-redux';
import { fetchBlog, fetchBlogs, deleteBlog } from '../../actions/blog_actions';
import { requestUser } from '../../actions/user_actions';
import BlogsShow from './blog_show';

import { selectBlog, selectUser } from '../../reducers/selectors';
import { fetchUser } from '../../util/user_api_util';

const mapStateToProps = (state, { match }) => ({
  blog: selectBlog(state, match.params.blogId),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBlog: id => dispatch(fetchBlog(id)),
  requestUser: (userId) => dispatch(requestUser(userId)),
  deleteBlog: blogId => dispatch(deleteBlog(blogId)),
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShow);



