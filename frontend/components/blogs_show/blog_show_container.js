import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';
import { requestUser } from '../../actions/user_actions';
import BlogsShow from './blog_show';

import { selectBlog } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  blog: selectBlog(state, match.params.blogId)
});

const mapDispatchToProps = dispatch => ({
  fetchBlog: id => dispatch(fetchBlog(id)),
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShow);