import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({componentLoggedIn: LoggedInComponent, component: Component,  path, loggedIn, exact}) => {
  return(
    <Route exact={exact} path={path} render={(props) => (
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <LoggedInComponent />
        )
      )}/>
  )
}

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route exact={exact} path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
