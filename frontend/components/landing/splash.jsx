import React from 'react';
import NewUserForm from './new_user_form';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const Splash = ({ loggedIn, errors, login, signup }) => {


  return(
    <div>
      <header className="landing-header">
        <Link to="/" className='landing-logo-link'>
          <h2 className="landing-logo">albertbook</h2>
        </Link>
        <SessionForm loggedIn={ loggedIn }
          errors={errors}
          login={login}/>
      </header>

      <div className="splash-background">
        <h3>Welcome to Facebook!
          We're glad you're here.</h3>

        <NewUserForm loggedIn={ loggedIn }
          errors={errors}
          login={login}
          signup={signup} />
      </div>
    </div>
  );
}

export default Splash;
