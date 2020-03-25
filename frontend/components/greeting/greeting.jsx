import BackgroundImages from '../background_images/background_images';
import DemoButton from '../demo_user_button/demo_user_container';
import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import LogoutButton from '../logout_button/logout_button_container';


const Greeting = ({ currentUser, logout }) => {

  if (currentUser) {
    return <Redirect to="/blogs" />
  }

  const sessionLinks = () => (
    <div>
      <DemoButton />
      <nav className="login-signup">
        <p>Come for what you love.<br/>Stay for what you discover.</p>
        <Link to="/signup">Get Started</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <hgroup className="header-group">
        <h2 className="header-name">welcome back {currentUser.username.toLowerCase()}</h2>
        {/* <Link to="/"><button className="header-button" onClick={logout}>logout</button></Link> */}
        <LogoutButton />
      </hgroup>
    </div>
  );

  return (
    <div>
      <BackgroundImages />

      <div className="background-author-div">
        Posted by <strong className="background-author-name-span">Tom</strong>
        <div className="background-author-image-div"></div>
      </div>

      <div className="tom-links-div">
        <p>Site built by <strong>Tom Betthauser</strong></p>
        <a className="tom-links-link" target="new" href="http://www.tombetthauser.com/">• Portfolio</a>
        <a className="tom-links-link" target="new" href="https://www.linkedin.com/in/tombetthauser/">• LinkedIn</a>
        <a className="tom-links-link" target="new" href="https://github.com/tombetthauser">• GitHub</a>
      </div>

      <form className="splashpage-searchbox-div">
        <label className="splashpage-searchbox-t">t</label>
        <input className="splashpage-searchbox-input" type="text" placeholder="Search Tomblr"></input>
      </form>

      <header>
        <Link to="/" className="header-link">
          <h1>tomblr</h1>
        </Link>
      </header>

      { currentUser ? personalGreeting() : sessionLinks() }

      <Link className="blogs-index-link-button" to="/blogs">⎈ here's whats trending</Link>
    </div>
  )
};

export default Greeting;