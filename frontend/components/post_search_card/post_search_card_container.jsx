import PostsSearchCard from './posts_search_card';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSearchCard);