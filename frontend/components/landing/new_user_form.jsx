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
      birth_day: null,
      birth_month: null,
      birth_year: null,
      gender: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user);
    this.state.password = "";
  }

  handleSelectChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
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

  selectMonth() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
   'Sep', 'Oct', 'Nov', 'Dec']
   let monthSelect = [];

   monthSelect.push(
     <option key="month" >Month</option>
   );

    months.forEach( (month, idx) => {
      monthSelect.push(
        <option key={`month-${idx}`}
          value={idx + 1}>{`${month}`}
        </option>
      );
    });

    return(
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

    return(
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

    return(
      <select onChange={this.handleSelectChange('birth_year')}>
        {yearSelect}
      </select>
    )
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

          <div className='new-user-birthdate'>
            <div>
              {this.selectMonth()}
            </div>
            <div>
              {this.selectDay()}
            </div>
            <div>
              {this.selectYear()}
            </div>
          </div>

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
