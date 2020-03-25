// import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { requestUser } from '../../actions/user_actions'
import DemoButton from './demo_user_button';
import { connect } from 'react-redux';
// import React from 'react';

const mapState = state => ({
    // navLink: <Link class="login-signup-link" to="/signup">sign up</Link>,
    // errors: state.errors.session,
    // formType: 'login',
});

const mapDisp = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapState, mapDisp)(DemoButton);