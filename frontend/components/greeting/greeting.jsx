import React from 'react';
import { Link } from 'react-router-dom';

const GREETINGS = [
  ["welcome back ", ""],
  // ["hello ", ", glad to see you're back"],
  // ["nice to see you again ", ""],
  // ["always a pleasure ", ""],
  // ["howdy ", "!"],
  // ["low-key, I'm so happy to see you ", ""],
  // ["pog to see you again ", ""],
  // ["hi there jason (just kidding ", ")"],
  // ["hello again ", "sy"],
  // ["hows it goin ", "?"]
]

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>tomblr</h1>
        </Link>
      </header>
      <nav className="login-signup">
        {/* <Link to="/" className="header-link"> */}
          <p>Come for what you love.<br />Stay for what you discover.</p>
        {/* </Link> */}
        <Link to="/signup">Get Started</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </div>
  );
  const randGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  const personalGreeting = () => (
    <hgroup className="header-group">
      {/* <h2 className="header-name">{randGreeting[0]}{currentUser.username.toLowerCase()}{randGreeting[1]}</h2> */}
      <Link to="/"><button className="header-button" onClick={logout}>logout</button></Link>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;