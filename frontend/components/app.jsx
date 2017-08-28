import React from 'react';
import SplashContainer from './landing/splash_container';
import MainPageContainer from './newsfeed/main_page_container';
import UserShow from './user_show/user_show';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-page">

    <Switch>
      <ProtectedRoute exact path="/users/:userId" component={UserShow} />
      <AuthRoute exact={true} path="/" component={SplashContainer} componentLoggedIn={MainPageContainer} />
    </Switch>

  </div>
);

export default App;
