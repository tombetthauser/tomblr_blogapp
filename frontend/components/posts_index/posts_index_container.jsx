import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchPosts } from '../../actions/post_actions';


const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);