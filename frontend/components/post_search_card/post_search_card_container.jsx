import { connect } from 'react-redux';
import PostsSearchCard from './posts_search_card';
// import { fetchPosts, deletePost } from '../../actions/post_actions';
// import { fetchFollows, createFollow, deleteFollow, fetchUserFollows } from '../../actions/follow_actions';
// import { fetchBlogs } from '../../actions/blog_actions';
// import { selectBlog } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  // searchTerm: match.params.searchTerm,
  // posts: Object.values(state.entities.posts),
  // follows: Object.values(state.entities.follows),
  // blogs: state.entities.blogs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // fetchPosts: () => dispatch(fetchPosts()),
  // fetchBlogs: () => dispatch(fetchBlogs()),
  // deletePost: (postId) => dispatch(deletePost(postId)),
  // fetchFollows: () => dispatch(fetchFollows()),
  // createFollow: follow => dispatch(createFollow(follow)),
  // deleteFollow: followId => dispatch(deleteFollow(followId)),
  // fetchUserFollows: userId => dispatch(fetchUserFollows(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSearchCard);