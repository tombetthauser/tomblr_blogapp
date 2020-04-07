import { connect } from 'react-redux';
import SearchField from './search_field';

const mapStateToProps = (state, { match }) => ({
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser,
  blogs: state.entities.blogs,
});

const mapDispatchToProps = dispatch => ({
  deletePost: (postId) => dispatch(deletePost(postId)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);