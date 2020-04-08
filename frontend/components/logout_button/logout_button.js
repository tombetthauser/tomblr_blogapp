import React from 'react';
import { Link } from 'react-router-dom';
import DemoButton from '../demo_user_button/demo_user_container';

const LogoutButton = ({ logout, currentUser }) => {
  if (currentUser) {
    return (
      <div className="header-logout-div">
        <span className="header-logout-welcome-span">
          Welcome back, {
            currentUser.username[0].toUpperCase() + 
            currentUser.username.slice(1, currentUser.username.length)
          }!
        </span>
        <button className="header-button-component" onClick={logout}>
          <span className="header-logout-span">Log Out</span>
        </button>
        <button className="header-button-component">
          <Link className="header-home-link" to="/feed">
            Home
          </Link>
        </button>
      </div>
    )
  } else {
    return (
      <DemoButton />
    )
  }
};

export default LogoutButton;