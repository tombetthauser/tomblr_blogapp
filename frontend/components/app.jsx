import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute } from '../util/route_util';



const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>tomblr</h1>
        <p>Come for the blogs. Stay for the bots.</p>
      </Link>
        <GreetingContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </header>
  </div>
)

export default App;