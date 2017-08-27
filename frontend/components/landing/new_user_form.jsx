import React from 'react';
import {withRouter} from 'react-router-dom';

class NewUserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birth_day: null,
      birth_month: null,
      birth_year: null,
      gender: ""

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.closeError = this.closeError.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user)
    this.state.password = "";
  }

  handleSelectChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  selectMonth() {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    let monthSelect = [];

    monthSelect.push(
      <option key="month">Month</option>
    );

    months.forEach((month, idx) => {
      monthSelect.push(
        <option key={`month-${idx}`} value={idx + 1}>{`${month}`}
        </option>
      );
    });

    return (
      <select onChange={this.handleSelectChange('birth_month')}>
        {monthSelect}
      </select>
    );
  }

  selectDay() {
    let daySelect = [];

    daySelect.push(
      <option key={`day`}>Day</option>
    );

    for (let i = 1; i <= 31; i++) {
      daySelect.push(
        <option key={`day-${i}`} value={i}>{`${i}`}</option>
      );
    }

    return (
      <select onChange={this.handleSelectChange('birth_day')}>
        {daySelect}
      </select>
    )
  }

  selectYear() {
    let yearSelect = [];

    yearSelect.push(
      <option key={`year`}>Year</option>
    );

    for (let i = 2017; i >= 1905; i--) {
      yearSelect.push(
        <option key={`year-${i}`} value={i}>{`${i}`}</option>
      );
    }

    return (
      <select onChange={this.handleSelectChange('birth_year')}>
        {yearSelect}
      </select>
    )
  }

  closeError(errorField) {
    document.getElementsByClassName(`signup-error-${errorField}`)[0].classList.add("sign-up-error-hidden");
  }

  renderErrorBorders() {
    Object.keys(this.props.errors).forEach( errorField => {
      document.getElementById(`error-${errorField}`).classList.add("signup-error-border")
    });
  }

  displayError(errorField, errorStatus) {
    if (this.props.errors[errorField]) {
      return (
        <div onClick={() => this.closeError(errorField)} className={`signup-error-${errorField} signup-style`}>{`${errorStatus}`}</div>
      )
    } else {
      return (
        <div className="signup-hidden"></div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="splash-right-side">
          <h1 className="splash-signup">Sign Up</h1>
          <h4 className="splash-comment-form-one">It’s free and always will be.</h4>
          <form className="splash-form" onSubmit={this.handleSubmit}>
            {this.displayError('first_name', "What is your name?")}
            {this.displayError('last_name', "What is your name?")}
            {this.displayError('gender', "Please choose a gender.")}
            {this.displayError('birth_day', "Select your birth day.")}
            {this.displayError('birth_month', "Select your birth month.")}
            {this.displayError('birth_year', "Select your birth year.")}
            {this.displayError('password', "Enter a combination of at least six numbers, letters and puncutation marks (like ! and &)")}
            {this.displayError('email', "You'll use this when you log in and if you ever need to reset your password.")}
            <div className="splash-form-name-field">
              <input className="splash-form-field-1 splash-form-placeholder" type="text" onChange={this.update('first_name')} value={this.state.first_name} placeholder="First name"/>

              <input className="splash-form-field-1 splash-form-placeholder" type="text" onChange={this.update('last_name')} value={this.state.last_name} placeholder="Last name"/>

            </div>
            <input className="splash-form-field-2 splash-form-placeholder" type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email"/>

            <input className="splash-form-field-2 splash-form-placeholder" type="password" onChange={this.update('password')} value={this.state.password} placeholder="New password"/>

            <div className='new-user-birthdate'>
              <div className='birthdate-lbl'>Birthday</div>
              <div className='birthdate-sel'>
                <div>
                  {this.selectMonth()}
                </div>
                <div>
                  {this.selectDay()}
                </div>
                <div>
                  {this.selectYear()}
                </div>
                <div className="disclaimer">
                  We won't share this information with anyone.
                </div>
              </div>
            </div>
            <div className="new-user-gender">
              <label className="new-user-gender-txt">
                <input name="gender" type="radio" value="female" onClick={this.handleSelectChange('gender')}/>{' '}Female</label>
              <label className="new-user-gender-txt">
                <input name="gender" type="radio" value="male" onClick={this.handleSelectChange('gender')}/>{' '}Male</label>
            </div>
            <p className="new-user-disclaimer">
              By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.
            </p>
            <div className="new-user-submit-container">
              <input className="new-user-submit-btn" type='submit' value="Create Account"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(NewUserForm);
