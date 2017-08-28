import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import FA from 'react-fontawesome';
import { updateFriendship, deleteFriendship, fetchFriendRequests } from '../../actions/friendship_actions';

class NavBar extends React.Component {

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleAcceptFriend = this.handleAcceptFriend.bind(this);
      this.handleDenyFriend = this.handleDenyFriend.bind(this);
      this.friendNotifs = this.friendNotifs.bind(this);
   }

   componentDidMount() {
      this.props.fetchFriendRequests(this.props.currentUser.id);
   }

   handleClick(e) {
      e.preventDefault();
     this.props.logout();
   }

   handleAcceptFriend(request) {
      const friend = {user1_id: request.id, user2_id: this.props.currentUser.id, status: "active"}
      this.props.updateFriendship(friend);
   }

   handleDenyFriend(request) {
      this.props.deleteFriendship(request.id);
   }

   friendNotifs() {
      return(
         <ul>
            {this.props.pendingRequests.map(request =>{
               return(
                  <div className="navbar-fr-wrap" key={`friendRequest-${request.id}`}>
                     <label>{request.first_name} {request.last_name}</label>
                     <button onClick={() => this.handleAcceptFriend(request)}>Confirm</button>
                     <button onClick={this.handleDenyFriend}>Delete Request</button>
                  </div>
               )
            })}
         </ul>
      )
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
            <div className="navbar-logout-dropdown">
               <FA size='lg' name="users" className="navbar-fr"/>
               <div className="navbar-fr-dropdown-content">
                  <p>Friend Requests</p>
                  {this.friendNotifs()}
               </div>
            </div>

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
      pendingRequests: state.session.currentUser.pending_requests || {},
      friendships: state.session.friendships || {},
   }
}

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(logout()),
      fetchFriendRequests: (id) => dispatch(fetchFriendRequests(id)),
      updateFriendship: friendship => dispatch(updateFriendship(friendship)),
      deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId)),
   }
}

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavBar))
