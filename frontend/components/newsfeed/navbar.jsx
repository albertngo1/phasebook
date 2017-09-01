import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Search from './navbar_search';
import FA from 'react-fontawesome';
import { updateFriendship, deleteFriendship, fetchFriendRequests } from '../../actions/friendship_actions';

class NavBar extends React.Component {

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleAcceptFriend = this.handleAcceptFriend.bind(this);
      this.handleDenyFriend = this.handleDenyFriend.bind(this);
      this.renderFriendRequests = this.renderFriendRequests.bind(this);
   }

   componentDidMount() {
      this.props.fetchFriendRequests();
   }

   componentWillReceiveProps(nextProps) {
      if (this.props.match.params.userId !== nextProps.match.params.userId){
         this.props.fetchFriendRequests();
      }
   }


   handleClick() {
     this.props.logout()
   }

   handleAcceptFriend(id) {
      this.props.updateFriendship(id);
   }

   handleDenyFriend(id) {
      this.props.deleteFriendship(id);
   }

   renderFriendRequests() {
      const users = this.props.friendReqUsers;
      if ((Object.keys(users).length > 0) && (Object.keys(this.props.friendRequests).length > 0)) {
         const friendReqMap = this.props.friendRequests.map( id => {
            return(
               <div className="navbar-fr-wrap" key={`friendReq-${id}`}>
                  <div className="navbar-fr-name">
                     <Link to={`/users/${users[id].id}`}>
                        <div>
                           {users[id].first_name} {users[id].last_name}
                        </div>
                     </Link>
                  </div>
                  <div className="navbar-fr-btn-wrap">
                     <button className="navbar-fr-confirm" onClick={() => this.handleAcceptFriend(id)}>Confirm</button>
                     <button className="navbar-fr-deny" onClick={() => this.handleDenyFriend(id)}>Delete Request</button>
                  </div>
               </div>
            )
         })
         if (friendReqMap.length > 0) {
            return friendReqMap;
         }  else {
            return <div className="navbar-fr-no-friends">No pending requests.</div>
         }
      } else {
         return(<div></div>)
      }
   }
   render() {
      const { currentUser } = this.props
      return(
         <div className="navbar-container">
            { !!currentUser && <Search />}
            <Link to={`/users/${currentUser.id}`}>
            <div className="navbar-user-wrap">
               <img className="navbar-user-pp" src={currentUser.profile_pic} alt="profile-pic" />
               <button className="navbar-user-home-hover">
                  <div className="navbar-user">
                     {currentUser.first_name}</div>
               </button>
            </div>
            </Link>
            <div className="navbar-user-home-hover:hover">
               <Link to='/' className="navbar-user navbar-home">Home</Link>
            </div>

            <div className="navbar-logout-dropdown">
               <FA size='lg' name="users" className="navbar-fr"/>
               <div className="navbar-fr-dropdown-content">
                  <p className="navbar-fr-text">Friend Requests</p>
                  {this.renderFriendRequests()}
               </div>
            </div>
               <div className="navbar-logout-dropdown" >
                  <FA size='lg' name="question-circle" className="navbar-help"/>
                  <div className="navbar-help-dropdown-content">
                     <p>How can I help? Contact me for inquiries!</p>
                  </div>
               </div>

               <button onClick={this.handleClick} className="navbar-logout-btn">Logout</button>



         </div>
      )
   }
}



const mapStateToProps = state => {
   const  currentUser = state.session.currentUser || {};
   return {
      currentUser: currentUser,
      friendRequests: currentUser.received_friend_requests || {},
      friendReqUsers: state.entities.friendships.friendRequests || {},
   }
}

const mapDispatchToProps = dispatch => {
   return {
      logout: () => dispatch(logout()),
      updateFriendship: friendshipId => dispatch(updateFriendship(friendshipId)),
      deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
      fetchFriendRequests: () => dispatch(fetchFriendRequests()),
   }
}

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavBar))



   // <FA size='lg' name="commenting" className="navbar-notif"/>
   // <FA size='lg' name="globe" className="navbar-notif"/>




   // <div className="navbar-logout-dropdown" onClick={this.handleClick}>
   //    <FA size='lg' name="sort-desc" className="navbar-logout" />
   //       <div onClick={this.handleClick} className="navbar-logout-dropdown-content">
   //          <p>Logout</p>
   //       </div>
   // </div>
