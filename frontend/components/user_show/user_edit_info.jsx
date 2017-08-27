import React from 'react';
import { connect } from 'react-redux';

class UserEditInfo extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    const { user } = this.props
    return (
    <ul>
      <li>Introduction: {user.introduction}</li>
      <li>Studied at {user.education}</li>
      <li>Lives in {user.education}</li>
      <li>Relationship status: {user.relationship}</li>
      <li>From {user.hometown}</li>
    </ul>
  )
  }
}


const mapStateToProps = state => {
  return {
    user: state.entities.user || {},
  }
}






export default connect(mapStateToProps, null)(UserEditInfo)
