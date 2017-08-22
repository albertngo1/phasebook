import React from 'react';
import { withRouter } from 'react-router-dom';


class NewUserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
      gender: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user);
    this.state.password = "";
  }

  errors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map( (err, idx) => (
              <li key={`error-${idx}`}>
                {err}
              </li>
            ))}
        </ul>
      )
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div>
        <h4>
          {this.errors()}
        </h4>
        <form onSubmit={this.handleSubmit}>

          <input type="text"
            onChange={this.update('first_name')}
            value={this.state.first_name}
            placeholder="First name"/>

          <input type="text"
            onChange={this.update('last_name')}
            value={this.state.last_name}
            placeholder="Last name"/>

          <input type="text"
            onChange={this.update('email')}
            value={this.state.email}
            placeholder="Email"/>

          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="New password"/>

          <label>
            <input
              name="gender"
              type="radio"
              value="male"/>{' '}Male</label>

          <label>
            <input
              name="gender"
              type="radio"
              value="female"/>{' '}Female</label>

          <input type='submit' value="Create Account" />
        </form>
      </div>
    )
  }
}

export default withRouter(NewUserForm);
