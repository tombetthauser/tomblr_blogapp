import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { requestUser } from '../../actions/user_actions'
import { selectUser } from '../../reducers/selectors'

const mapStateToProps = state => ({
    // currentUser: selectUser(state, state.session.id)
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);





