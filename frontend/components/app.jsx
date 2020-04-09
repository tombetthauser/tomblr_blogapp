import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BlogsIndexContainer from './blogs_index/blogs_index_container';
import PostsSearchContainer from './posts_search/posts_search_container';
import BlogShowContainer from './blogs_show/blog_show_container';
import NewBlogPage from './new_blog_page/new_blog_page_container';
import FollowsFeed from './follows_feed/follows_feed_container';

// import PostIndex from './posts_index';

// OLD ERRORY WAY
import createHistory from "history/createBrowserHistory"
export const history = createHistory()

history.listen((location, action) => {
  window.scrollTo(0, 0)
})

const App = () => {
  return (
    <div>
      <Route exact path="/" component={GreetingContainer} />
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
      <Route path="/new-blog" component={NewBlogPage} />
      {/* <Route exact path="/blogs" component={BlogsIndexContainer}/> */}
      <Route exact path="/search" component={PostsSearchContainer}/>
      <Route path="/search/:searchTerm" component={PostsSearchContainer}/>
      <Route path="/feed" component={FollowsFeed}/>
      <Route path="/blogs/:blogId" component={BlogShowContainer} />
    </div>
  )
}

export default App;