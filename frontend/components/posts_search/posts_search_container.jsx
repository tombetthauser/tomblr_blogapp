import { connect } from 'react-redux';
import PostsSearch from './posts_search';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchBlogs } from '../../actions/blog_actions';
// import { selectBlog } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  searchTerm: match.params.searchTerm,
  posts: Object.values(state.entities.posts),
  blogs: state.entities.blogs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchBlogs: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSearch);