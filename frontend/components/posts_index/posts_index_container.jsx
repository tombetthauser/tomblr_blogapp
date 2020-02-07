import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, props) => ({
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser,
  // blogId: props.match.params.blogId
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);