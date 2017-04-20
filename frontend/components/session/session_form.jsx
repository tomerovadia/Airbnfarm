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
      altText = 'Already have an Airbnb account?';
    } else {
      formTypeFormatted = 'Log In';
      altFormTypeFormatted = 'Sign Up';
      altFormType = 'signup';
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

      <div className='session-form-blackout' onClick={this.props.clearModal}>
        <div className='session-form-div' onClick={this.stopPropagation}>

          <form onSubmit={this.handleSubmit} id='session-form'>

            <div className='session-form-error-div'>{emailErrors}</div>

            <input
              className={this.determineInputClassName('email')}
              type='text'
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder='Email Address'
            />

            <div className='session-form-error-div'>{passwordErrors}</div>

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

    );

  }

}

export default SessionForm;
