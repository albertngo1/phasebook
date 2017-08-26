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
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user);
    this.state.password = "";
  }

  demoLogin(e) {
    this.props.login(({email: "albertngo1@gmail.com", password: "password"}));
    this.setState({email: "albertngo1@gmail.com", password: "password"});
  }

  componentWillMount() {
    this.setState({ errors: [] })
  }

  errors() {
    const { errors } = this.props
    if (errors) {
      return(
        <ul>
          {errors.map( (err, idx) => {
            if (errors.includes("Invalid credentials, please try again")) {
              return(
                <li key={`error-${idx}`} className="session-error">
                  {err}
                </li>
              )
            } else {
              <div></div>
            }
          })}
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
          <div>
            <input className="session-demo-btn"
              onClick={this.demoLogin}
              type='submit'
              value="Demo" />
          </div>
        </form>
        <div>{this.errors()}</div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
