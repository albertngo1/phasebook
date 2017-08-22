import React from 'react';
import NewUserForm from './new_users/new_user_form';
import SessionForm from './sessions/session_form';

const Splash = ({ loggedIn, errors, login, signup }) => {


  return(
    <div>
      <div>
        <SessionForm loggedIn={ loggedIn }
          errors={errors}
          login={login}/>
      </div>

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
