import { connect } from 'react-redux';
import PostsSearch from './posts_search';
import { fetchPosts, deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, { match }) => ({
  posts: Object.values(state.entities.posts),
  blogs: state.entities.blogs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSearch);