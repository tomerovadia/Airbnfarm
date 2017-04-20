import React from 'react';
import { hashHistory } from 'react-router';


class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.formType !== this.props.formType){
      this.props.clearErrors();
    }
  }

  handleChange(formInput){
    return (e) => this.setState({[formInput]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.clearModal);
  }

  switchModal(modalName){
    return () => this.props.receiveModal(modalName);
  }

  stopPropagation(e){
    e.stopPropagation();
  }

  determineInputClassName(inputType) {
    if(this.props.errors[inputType]){
      return 'session-form-input-with-error';
    } else {
      return '';
    }
  }

  render(){

    let formTypeFormatted;
    let altFormTypeFormatted;
    let altFormType;
    let altText;
    if(this.props.formType === 'signup'){
      formTypeFormatted = 'Sign Up';
      altFormTypeFormatted = 'Log In';
      altFormType = 'login';
      altText = 'Already have an Airnbn account?';
    } else {
      formTypeFormatted = 'Log In';
      altFormTypeFormatted = 'Sign Up';
      altFormType = 'signup';
      altText = "Don't have an account?";
    }

    let emailError;
    let passwordError;
    let credentialsError;
    if(Object.keys(this.props.errors).length === 0){
      emailError = '';
      passwordError = '';
      credentialsError = '';
    } else {
      emailError = this.props.errors.email;
      passwordError = this.props.errors.password;
      credentialsError = this.props.errors.credentials;
    }

    let credentialsErrorDiv = null;
    if(credentialsError){
      credentialsErrorDiv = (
        <div className='session-form-credentials-error-div'>
          <div className='credentials-error-logo'>
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          </div>
          <div className='credentials-error-text'>
            <span>{credentialsError}</span>
          </div>
        </div>
      )
    }

    return (

      <div className='session-form-blackout' onClick={this.props.clearModal}>

        <div className='session-form-error-and-form' onClick={this.stopPropagation}>
          {credentialsErrorDiv}
          <div className='session-form-div'>

            <form onSubmit={this.handleSubmit} id='session-form'>

              <div className='session-form-error-div'>{emailError}</div>

              <input
                className={this.determineInputClassName('email')}
                type='text'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email Address'
              />

              <div className='session-form-error-div'>{passwordError}</div>

              <input
                className={this.determineInputClassName('password')}
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'
              />

              <button
                form='session-form'
                type='submit'>
                <span>{formTypeFormatted}</span>
              </button>

            </form>

            <div className='session-form-alt-div clearfix'>
                <div className='session-form-alt-text'>
                  <span>{altText}</span>
                </div>

              <button
                className='session-form-alt-button'
                onClick={this.switchModal(altFormType)}>
                {altFormTypeFormatted}
              </button>

            </div>

          </div>
        </div>
      </div>

    );

  }

}

export default SessionForm;
