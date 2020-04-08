import FollowButton from './follow_button';
import { createFollow, deleteFollow, } from '../../actions/follow_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchBlogs } from '../../actions/blog_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  follows: Object.values(state.entities.follows),
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser,
  blogs: state.entities.blogs,
});

const mapDispatchToProps = dispatch => ({
  deleteFollow: followId => dispatch(deleteFollow(followId)),
  createFollow: follow => dispatch(createFollow(follow)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchBlogs: () => dispatch(fetchBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);