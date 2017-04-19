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

  redirect(new_url){
    () => hashHistory.push(new_url)
  }

  render(){

    let formType = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    let errorsString = Object.keys(this.props.errors).length === 0 ? "" : JSON.stringify(this.props.errors);

    return (

      <div className='session-form-blackout'>
        <div className='session-form-div'>

          <div>{errorsString}</div>

          <form onSubmit={this.handleSubmit} id='session-form'>

            <input
              type='text'
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder='Email Address'
            />

            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder='Password'
            />

            <button
              onClick={}
              form='session-form'
              type='submit'>
              <span>{formType}</span>
            </button>

          </form>

          <div className='session-form-alt-div'>
            <div className='session-form-alt-text'>
              Don't have an account?
            </div>

            <div className='session-form-alt-button'>
              <button>
                Sign Up
              </button>
            </div>
          </div>

        </div>
      </div>

    );

  }

}

export default SessionForm;
