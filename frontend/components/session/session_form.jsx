import React from 'react';
import { hashHistory } from 'react-router';


class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(formInput){
    return (e) => this.setState({[formInput]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  redirect(){

  }

  determineInputClassName() {
    return 'session-form-input-with-error';
  }

  render(){

    let formType;
    let altFormType;
    let altText;
    if(this.props.formType === 'signup'){
      formType = 'Sign Up';
      altFormType = 'Log In';
      altText = 'Already have an Airbnb account?';
    } else {
      formType = 'Log In';
      altFormType = 'Sign Up';
      altText = "Don't have an account?";
    }



    let emailErrors;
    let passwordErrors;
    if(Object.keys(this.props.errors).length === 0){
      emailErrors = '';
      passwordErrors = '';
    } else {
      emailErrors = this.props.errors.email;
      passwordErrors = this.props.errors.password;
    }

    return (

      <div className='session-form-blackout'>
        <div className='session-form-div'>

          <form onSubmit={this.handleSubmit} id='session-form'>

            {emailErrors}

            <input
              className={this.determineInputClassName()}
              type='text'
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder='Email Address'
            />

            {passwordErrors}

            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder='Password'
            />

            <button
              onClick={this.redirect}
              form='session-form'
              type='submit'>
              <span>{formType}</span>
            </button>

          </form>

          <div className='session-form-alt-div'>
            <div className='session-form-alt-text'>
              {altText}
            </div>

            <div className='session-form-alt-button'>
              <button>
                {altFormType}
              </button>
            </div>
          </div>

        </div>
      </div>

    );

  }

}

export default SessionForm;
