// import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { requestUser } from '../../actions/user_actions'
import DemoButton from './demo_user_button';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions/blog_actions';

const mapState = state => ({ });

const mapDisp = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
    processForm: (user) => dispatch(login(user)),
    fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(mapState, mapDisp)(DemoButton);