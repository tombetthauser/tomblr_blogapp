import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';



const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>tomblr</h1>
        <p>Come for the blogs. Stay for the bots.</p>
      </Link>
      <GreetingContainer />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </header>
  </div>
)

export default App;