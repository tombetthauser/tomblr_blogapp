import { connect } from 'react-redux';
import SearchField from './search_field';

const mapStateToProps = (state, { match }) => ({
  // searchTerm: match.params.searchTerm,
  posts: Object.values(state.entities.posts),
  blogs: state.entities.blogs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);