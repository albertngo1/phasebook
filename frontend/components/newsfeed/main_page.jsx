import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }




  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h3>Welcome to town, {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  }
}

export default Landing;
