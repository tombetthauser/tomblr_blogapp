import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link class="login-signup-link" to="/signup">sign up</Link>,
});

const mapDisp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapState, mapDisp)(SessionForm);
