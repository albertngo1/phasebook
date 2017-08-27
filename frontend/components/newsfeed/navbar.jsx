import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import FA from 'react-fontawesome';

class NavBar extends React.Component {

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
     this.props.logout();
   }

   render() {
      const { currentUser } = this.props
      return(
         <div className="navbar-container">
            <div className="navbar-search-ctn">
               <Link to='/'>
                  <div className="navbar-logo" >
                     <FA name="facebook-official" size='2x' />
                  </div>
               </Link>
               <input className="navbar-searchbar" type="text"
                  placeholder="Search" />
               <FA name="search" className="navbar-search-btn" />
            </div>
            <Link to={`/users/${currentUser.id}`}>
            <button className="navbar-user-home-hover">
               <div className="navbar-user">{currentUser.first_name}</div>
            </button>
            </Link>
            <div className="navbar-user-home-hover:hover">
               <Link to='/' className="navbar-user navbar-home">Home</Link>
            </div>

            <FA size='lg' name="users" className="navbar-notif"/>
            <FA size='lg' name="commenting" className="navbar-notif"/>
            <FA size='lg' name="globe" className="navbar-notif"/>


               <div className="navbar-logout-dropdown" >
                  <FA size='lg' name="question-circle" className="navbar-help"/>
                  <div className="navbar-help-dropdown-content">
                     <p>How can we help? Contact me for inquiries!</p>
                  </div>
               </div>

               <Link to="/">
               <div className="navbar-logout-dropdown" onClick={this.handleClick}>
                  <FA size='lg' name="sort-desc" className="navbar-logout" />
                     <div onClick={this.handleClick} className="navbar-logout-dropdown-content">
                        <p>Logout</p>
                     </div>
               </div>
               </Link>


         </div>
      )
   }
}



const mapStateToProps = state => {
   return {
      currentUser: state.session.currentUser || {},
   }
}

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(logout()),
   }
}

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavBar))
