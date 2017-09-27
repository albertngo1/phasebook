import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import FA from 'react-fontawesome';


const LeftNav = (props) => {

  const currentUser = props.currentUser
  return(
    <div className="main-page-left-nav">
      <div className="mp-left-nav-name">
        <Link to={`/users/${currentUser.id}`}>
          <div className="mp-left-nav-name-wrap">
            <img className="mp-left-nav-pp" src={currentUser.profile_pic_small} alt="profile-pic"/>

            <div className="mp-left-nav-name-title">
              {`${currentUser.first_name} ${currentUser.last_name}`}
            </div>
          </div>
        </Link>
      </div>
      <NavLink to="/" className="mp-left-nav-newsfeed" activeStyle={{
        fontWeight: 'bold',
        color: 'black'
      }}>
        <span className="mp-left-nav-newsfeed-item-1"><FA name="newspaper-o" size='lg'/></span>
        <span>
          News Feed</span>
      </NavLink>
      <div className="mp-left-nav-explore-wrap">
        <span className="mp-left-nav-explore">Explore</span>
      </div>
      <a href="http://ngoalbert.com">
        <div className="mp-left-nav-misc">
          <span className="mp-left-nav-newsfeed-item-1"><FA name="home" size='lg'/></span><span>Website</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/albertngo/">
      <div className="mp-left-nav-misc">
        <span className="mp-left-nav-newsfeed-item-1"><FA name="linkedin" size='lg'/></span><span>LinkedIn</span>
      </div>
      </a>
      <a href="https://github.com/albertngo1">
      <div className="mp-left-nav-misc">
        <span className="mp-left-nav-newsfeed-item-1"><FA name="github" size='lg'/></span><span>Github</span>
      </div>
      </a>
      <a href="https://angel.co/albert-ngo-2">
      <div className="mp-left-nav-misc">
        <span className="mp-left-nav-newsfeed-item-1"><FA name="angellist" size='lg'/></span><span>AngelList</span>
      </div>
      </a>
    </div>
  )
}

export default LeftNav;
