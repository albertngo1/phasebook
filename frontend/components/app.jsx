import React from 'react';
import MainPageContainer from './newsfeed/main_page_container';
import SessionFormContainer from './landing/sessions/session_form_container';
import NewUserFormContainer from './landing/new_users/new_user_form_container';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>phasebook</h1>
      <MainPageContainer />
    </header>

    <AuthRoute exact path="/" component={SessionFormContainer} componentLoggedIn={MainPageContainer} />
    <AuthRoute exact path="/" component={NewUserFormContainer} componentLoggedIn={MainPageContainer} />

  </div>
);

export default App;
