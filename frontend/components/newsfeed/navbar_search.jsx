import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import FA from 'react-fontawesome';
import { fetchSearchUsers } from '../../actions/user_actions';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         input: "",
         visible: true
      }
      this.handleInput = this.handleInput.bind(this);
      this.searchResults = this.searchResults.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }



   handleInput(e) {
      this.setState({input: e.currentTarget.value});
      this.props.performSearch(this.state.input);
   }

   handleClick(e) {
      this.setState({input: ""});
   }

   searchResults() {
      if (this.state.input === "") {
         return null;
      } else if (Object.keys(this.props.users).length) {
         const users = this.props.users
         return Object.keys(this.props.users).map( el => {
            return (
               <Link onClick={this.handleClick} to={`/users/${el}`} key={`search-${el}`}>
                  <div  className="navbar-search-el">

                     {users[el].first_name} {users[el].last_name}
                  </div>
               </Link>
            )
         })
      } else {
         return null;
      }
   }


   render() {
      return(
         <div className="navbar-search-ctn">
            <Link to='/'>
               <div className="navbar-logo" >
                  <FA name="facebook-official" size='2x' />
               </div>
            </Link>
            <input className="navbar-searchbar" type="text"
               placeholder={`Search`}
               onChange={this.handleInput}
               value={this.state.input}/>
            <FA name="search" className="navbar-search-btn" />
               <div className={this.searchResults() ? "navbar-search-dropdown" : "navbar-search-hidden"}>
                  <p>Recent Searches</p>
                  {this.searchResults()}
               </div>
         </div>
      )
   }
}


const mapStateToProps = state => {
   return {
      currentUser: state.session.currentUser || {},
      users: state.ui.search
   }
}
const mapDispatchToProps = dispatch => ({
   performSearch: searchString => dispatch(fetchSearchUsers(searchString)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
