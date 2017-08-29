import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class FriendList extends React.Component {

  constructor(props) {
    super(props);
  }









  render() {
    return(
      <div>TEST
        {this.props.currentUser.first_name}
      </div>
    )
  }





}

export default FriendList
