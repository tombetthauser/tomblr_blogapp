import { connect } from 'react-redux';
import BlogsIndex from './blogs_index';
import { fetchBlogs } from '../../actions/blog_actions';


const mapStateToProps = state => ({
  blogs: Object.values(state.entities.blogs),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndex);