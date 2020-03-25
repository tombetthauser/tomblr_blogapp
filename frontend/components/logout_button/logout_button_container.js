import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LogoutButton from './logout_button';

const mSTP = state => ({ currentUser: state.session.currentUser });
const mDTP = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(mSTP, mDTP)(LogoutButton);