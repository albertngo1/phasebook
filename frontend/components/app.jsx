import React from 'react';
import SplashContainer from './landing/splash_container';
import MainPageContainer from './newsfeed/main_page_container';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="app-page">

    <AuthRoute exact path="/" component={SplashContainer} componentLoggedIn={MainPageContainer} />

  </div>
);

export default App;
