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
            <div className="navbar-logo" />
            <div className="navbar-search-ctn">
               <input className="navbar-searchbar" type="text"
                  placeholder="Search" />
               <FA name="search" className="navbar-search-btn" />
            </div>
            <button>
               <div className="navbar-user">{currentUser.first_name}</div>
            </button>
            <Link to='/' className="navbar-user navbar-home">Home</Link>

            <FA name="users" className="navbar-notif"/>
            <FA name="commenting" className="navbar-notif"/>
            <FA name="globe" className="navbar-notif"/>
            <FA name="question-circle" className="navbar-help"/>
            <FA name="sort-desc" className="navbar-logout" onClick={this.handleClick} />
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
