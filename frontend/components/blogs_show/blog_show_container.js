import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';
import BlogsShow from './blog_show';

// import { selectReviewsForBench, selectBench } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const blogId = parseInt(match.params.blogId);
  const blog = selectBench(state.entities, blogId);
  // const posts = selectReviewsForBench(state.entities, blog);
  return {
    blogId: blogId,
    blog: blog
    // posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBlog: id => dispatch(fetchBlog(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShow);