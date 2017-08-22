import React from 'react';
import NewUserForm from './new_user_form';
import SessionForm from './session_form';

const Splash = ({ loggedIn, errors, login, signup }) => {


  return(
    <div>
      <header>
        <h2>phasebook</h2>
        <SessionForm loggedIn={ loggedIn }
          errors={errors}
          login={login}/>
      </header>

      <div>
        <NewUserForm loggedIn={ loggedIn }
          errors={errors}
          login={login}
          signup={signup} />
      </div>
    </div>
  );
}

export default Splash;
