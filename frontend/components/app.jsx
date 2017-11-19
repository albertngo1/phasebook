import React from 'react';
import Splash from './landing/splash';
import MainPage from './newsfeed/main_page';
import UserShow from './user_show/user_show';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="app-page">
    <Switch>
      <ProtectedRoute path="/users/:userId" component={UserShow} />
      <AuthRoute exact={true} path="/" component={Splash} componentLoggedIn={MainPage} />
    </Switch>

  </div>
);

export default App;
