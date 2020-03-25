import React from 'react';
import { Link } from 'react-router-dom';
import DemoButton from '../demo_user_button/demo_user_container';

const LogoutButton = ({ logout, currentUser }) => {
  if (currentUser) {
    return (
      <Link to="/">
        <button className="header-button-component" onClick={logout}>
          Log Out
        </button>
      </Link>
    )
  } else {
    return (
      <DemoButton />
    )
  }
};

export default LogoutButton;