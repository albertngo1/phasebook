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
               <div>{currentUser.first_name}</div>
            </button>
            <button onClick={this.handleClick}>Log Out</button>
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
