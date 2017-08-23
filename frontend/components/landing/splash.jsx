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
        <div className="splash-static">
          <h3 className="splash-static-cmt-1">Welcome to Phasebook!
            We're glad you're here.</h3>
          <h4 className="splash-static-cmt-2">
            We believe friends are important — we hope you'll connect with yours on Phasebook.
          </h4>
        </div>

        <NewUserForm loggedIn={ loggedIn }
          errors={errors}
          login={login}
          signup={signup} />
      </div>
    </div>
  );
}

export default Splash;
