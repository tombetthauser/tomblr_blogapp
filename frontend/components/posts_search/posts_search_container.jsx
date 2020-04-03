import { connect } from 'react-redux';
import PostsSearch from './posts_search';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchBlogs } from '../../actions/blog_actions';
// import { selectBlog } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  searchTerm: match.params.searchTerm,
  posts: Object.values(state.entities.posts),
  follows: Object.values(state.entities.follows),
  blogs: state.entities.blogs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchBlogs: () => dispatch(fetchBlogs()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  fetchFollows: () => dispatch(fetchFollows()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: followId => dispatch(deleteFollow(followId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSearch);