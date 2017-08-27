import React from 'react';
import { connect } from 'react-redux';
import FA from 'react-fontawesome';

class UserEditInfo extends React.Component {

  constructor(props) {
    super(props);
    this.renderIntro = this.renderIntro.bind(this);
  }

  renderIntro(user) {
    if (user.introduction) {
      return (
        <li className="pp-user-info-li-intro">
          {user.introduction}
        </li>
      )
    }
  }

  renderEducation(user) {
    if (user.education) {
      return (
        <div className="pp-user-info-li-wraps">
          <FA className="pp-user-info-li-icon" name="book" />
          <li className="pp-user-info-li">
            Studied at {user.education}
          </li>
        </div>
      )
    }
  }

  renderHometown(user) {
    if (user.hometown) {
      return (
        <div className="pp-user-info-li-wraps">
          <FA className="pp-user-info-li-icon" name="home" />
        <li className="pp-user-info-li">From {user.hometown}</li>
        </div>
      )
    }
  }

  renderCity(user) {
    if (user.current_city) {
      return (
        <div className="pp-user-info-li-wraps">
        <FA className="pp-user-info-li-icon" name="map-marker" />
        <li className="pp-user-info-li"
        >Lives in {user.current_city}</li>
    </div>
      )
    }
  }

  renderRelationship(user) {
    if (user.relationship) {
      return (
        <div className="pp-user-info-li-wraps">
        <FA className="pp-user-info-li-icon" name="heart" />
        <li className="pp-user-info-li">
          Relationship status: {user.relationship}
        </li>
      </div>
      )
    }
  }


  render() {
    const { user } = this.props
    return (
    <ul className="pp-user-info">
      {this.renderIntro(user)}
      {this.renderEducation(user)}
      {this.renderHometown(user)}
      {this.renderCity(user)}
      {this.renderRelationship(user)}
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
