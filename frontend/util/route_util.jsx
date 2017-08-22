import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

const Auth = ({componentLoggedIn: LoggedInComponent, component: Component,  path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <componentLoggedIn />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
