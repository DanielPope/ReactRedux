import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render () {
    return (
      <div className="rows">
        <div className="col-md col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
}
export default SignupPage;
