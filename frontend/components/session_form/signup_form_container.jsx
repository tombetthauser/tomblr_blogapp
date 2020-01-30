import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link class="login-signup-link" to="/login">log in</Link>,
});

const mapDisp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mapState, mapDisp)(SessionForm);