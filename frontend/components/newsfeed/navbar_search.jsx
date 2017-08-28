import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';
import { fetchAllUsers } from '../../actions/user_actions';

class Search extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         input: ""
      }
      this.handleInput = this.handleInput.bind(this);
      this.searchResults = this.searchResults.bind(this);
   }

   componentDidMount() {
      this.props.fetchAllUsers();
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.input !== this.state.input) {
         this.props.fetchAllUsers();
      }
   }

   handleInput(e) {
      this.setState({input: e.currentTarget.value})
   }

   searchResults(users) {
      let results = []
      if (this.state.input.length === 0) {
         return null;
      }
      Object.keys(users).forEach( id => {
         let firstNameSearch = users[id].first_name.slice(0, this.state.input.length).toLowerCase()
         if (firstNameSearch === this.state.input.toLowerCase() && !results.includes(users[id])) {
            results.push(users[id]);
         }
         let lastNameSearch = users[id].last_name.slice(0, this.state.input.length).toLowerCase()
         if (lastNameSearch === this.state.input.toLowerCase() && !results.includes(users[id])) {
            results.push(users[id]);
         }

         let fullName = firstNameSearch + " " + lastNameSearch;
         if (fullName === this.state.input.toLowerCase()) {
            results.push(users[id]);
         }
      });

      if (results.length === 0) {
         return null;
      }
      return results.map( el => {
         return (
            <Link to={`/users/${el.id}`} key={`search-${el.id}`}>
            <div className="navbar-search-el">

                  {el.first_name} {el.last_name}
            </div>
            </Link>
         )
      })
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
               <div className={this.searchResults(this.props.users) ? "navbar-search-dropdown" : "navbar-search-hidden"}>
                  <p>Recent Searches</p>
                  {this.searchResults(this.props.users)}
               </div>
         </div>
      )
   }
}


const mapStateToProps = state => {
   return {
      currentUser: state.session.currentUser || {},
      users: state.entities.user.search || {}
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchAllUsers: () => dispatch(fetchAllUsers()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
