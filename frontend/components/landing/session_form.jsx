import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user);
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

  render() {
    return(
      <div className="landing-session">
        <h4>
          {this.errors()}
        </h4>
        <form className="session-form" onSubmit={this.handleSubmit}>

          <div className="session-email">
            <label className="session-label">Email</label>
            <input type="text"
              className="session-textbox"
              onChange={this.update('email')}
              value={this.state.email}/>
          </div>
          <div className="session-password">
            <label className="session-label">Password</label>
            <input className="session-textbox"
              type="password"
              onChange={this.update('password')}
              value={this.state.password}/>
          </div>
          <div>
            <input className="session-login-btn" type='submit' value="Log In" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
