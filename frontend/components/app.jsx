import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BlogsIndexContainer from './blogs_index/blogs_index_container';
import PostsSearchContainer from './posts_search/posts_search_container';
import BlogShowContainer from './blogs_show/blog_show_container';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={GreetingContainer} />
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
      <Route exact path="/blogs" component={BlogsIndexContainer}/>
      <Route path="/search/:searchTerm" component={PostsSearchContainer}/>
      <Route path="/blogs/:blogId" component={BlogShowContainer} />
    </div>
  )
}

export default App;