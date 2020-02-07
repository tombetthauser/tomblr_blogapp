import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BlogsIndexContainer from './blogs_index/blogs_index_container';
import BlogShowContainer from './blogs_show/blog_show_container';

import { AuthRoute } from '../util/route_util';

const SUBHEADINGS = [
  "Come for the blogs. Stay for the bots.",
  // "It's like tumblr, but it's not tumblr.",
  // "Blogs, posts, cats, tomblr has it all.",
  // "A lot like tumblr, but made by Tom.",
  // "If it isn't on tomblr, it doesn't matter."
];

// import icon from '../../app/assets/images/compass.svg';

const App = () => {
  const randSubHeading = SUBHEADINGS[Math.floor(Math.random() * SUBHEADINGS.length)];
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>tomblr</h1>
          <p>Come for what you love.<br />Stay for what you discover.</p>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/blogs/:blogId" component={BlogShowContainer} />
      </Switch>
      <Route exact path="/blogs" component={BlogsIndexContainer}/>
      <Link className="blogs-index-link-button" to="/blogs">⎈ here's whats trending</Link>
    </div>
  )
}

export default App;