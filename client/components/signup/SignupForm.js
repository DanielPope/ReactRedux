import React from 'react';
import departments from 'departments';
import map from 'lodash/map';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      email:'',
      password:'',
      department:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render () {
    const options = map(departments, (val, key) =>
    <option key={val} value={val}>{val}</option>
    );
    return (
      <div className="rows">
        <form onSubmit={this.onSubmit}>
          <h1 className="text-center">Join the Intranet</h1>

            <div className="form-group">
              <label className="control-label">Username</label>
              <input
                value={this.state.username}
                onChange={this.onChange}
                type="text"
                name="username"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Email</label>
              <input
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                value={this.state.password}
                onChange={this.onChange}
                type="text"
                name="password"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Department</label>
              <select
                name="department"
                className="form-control"
                value={this.state.department}
                onChange={this.onChange}
                >
                <option value="" disabled> Choose Your Department</option>
                {options}
              </select>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm;
