import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BlogsIndexContainer from './blogs_index/blogs_index_container';
import BlogShowContainer from './blogs_show/blog_show_container';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/blogs" component={BlogsIndexContainer}/>
      <Route path="/blogs/:blogId" component={BlogShowContainer} />
    </div>
  )
}

export default App;